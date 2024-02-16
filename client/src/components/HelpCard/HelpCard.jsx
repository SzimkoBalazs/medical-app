import React from 'react'
import './HelpCard.css'

const HelpCard = () => {
  return (
    <div className="help-card">
      <h2>Need Help?</h2>
      <h3>
        <a href="mailto:support@example.com" className="support-link">Contact Our Support Team</a>
      </h3>
      <p>If you have any questions or need assistance with your bookings, please reach out to us.</p>
    </div>
  )
}

export default HelpCard