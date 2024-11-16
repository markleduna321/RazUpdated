import { Link } from '@inertiajs/react'
import React from 'react'

export default function MedRepDashboardPage() {
  return (
    <div>MedRepDashboardPage
      <Link
        method="post" href={route('logout')} as="button"
        className="block px-3 py-1 text-sm leading-6 text-gray-900 data-[focus]:bg-gray-50"
      >
        Sign Out
      </Link>

    </div>
  )
}
