import BlogDashboardNav from '@/components/blog-dashboard/navbar'
import React, { Suspense } from 'react'

function Notification() {
    return (
        <div>
            <Suspense fallback={<div></div>}>
                <BlogDashboardNav />
            </Suspense>
        </div>

    )
}

export default Notification