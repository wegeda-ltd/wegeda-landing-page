const { GoogleSpreadsheet } = require("google-spreadsheet");

const axios = require("axios");

const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID);

export default async function handler(req, res) {
  let {
    query: {
      occupation,
      email,
      company,
      first_name,
      last_name,
      phone,
      gender,
      current_address,
      moving_to,
      checkin_date,
      other_info,
    },
  } = req;

  let created_at = new Date().toISOString();

  phone = phone.slice(1);
  // let phoneNumber = "0" + phone;
  try {
    if (!first_name) {
      return res.json({
        success: false,
        type: "fname",
        message: "Name is required",
      });
    }
    if (!last_name) {
      return res.json({
        success: false,
        type: "lname",
        message: "Name is required",
      });
    }
    if (!company) {
      return res.json({
        success: false,
        type: "company",
        message: "Company is required",
      });
    }
    if (!gender) {
      return res.json({
        success: false,
        type: "gender",
        message: "Gender is required",
      });
    }
    if (!occupation) {
      return res.json({
        success: false,
        type: "occupation",
        message: "Occupation is required",
      });
    }
    if (!email) {
      return res.json({
        success: false,
        type: "email",
        message: "Email is required",
      });
    }
    if (!current_address) {
      return res.json({
        success: false,
        type: "caddress",
        message: "Address is required",
      });
    }

    if (!parseInt(phone, 11)) {
      return res.json({
        success: false,
        type: "phone",
        message: "Enter a valid phone number",
      });
    }

    // Phone = `'${Phone}`;
    await doc.useServiceAccountAuth({
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/gm, "\n"),
    });

    await doc.getInfo();
    const sheet = doc.sheetsByIndex[0];

    const rows = await sheet.getRows();

    console.log(rows, "rows");
    console.log(sheet, "sheet");
    const duplicateUser = rows.filter(
      (row) =>
        row?._rawData[5].includes(`0-${phone}`) ||
        row?._rawData[1].includes(email)
    );

    if (duplicateUser.length > 0) {
      return res.json({
        success: false,
        type: "duplicate",
        message: "User has already been added!",
      });
    }

    const addedRows = await sheet.addRow([
      occupation,
      email,
      company,
      first_name,
      last_name,
      `0-${phone}`,
      gender,
      current_address,
      moving_to,
      checkin_date,
      other_info,
      created_at,
    ]);

    await addedRows.save();

    res.status(201).json({ success: true, message: "Successfully added!" });
  } catch (error) {
    console.log(error, "error");
    res.status(500).json(error);
  }
}
