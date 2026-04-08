export const EVANGELISM_LOGS = [
  {
    id: 1,
    date: 'Oct 24, 2023',
    time: '10:45 AM',
    evangelist: 'Marcus Thorne',
    department: 'NORTH SECTOR TEAM',
    contacts: 42,
    filledCount: 32,
    healedCount: 8,
    avatar: '/vector-profiles/5.png'
  },
  {
    id: 2,
    date: 'Oct 22, 2023',
    time: '03:12 PM',
    evangelist: 'Elena Rodriguez',
    department: 'DOWNTOWN CAMPUS',
    contacts: 89,
    filledCount: 45,
    healedCount: 12,
    avatar: '/vector-profiles/7.png'
  },
  {
    id: 3,
    date: 'Oct 20, 2023',
    time: '09:00 AM',
    evangelist: 'Samuel Wright',
    department: 'EAST VALLEY OUTREACH',
    contacts: 12,
    filledCount: 8,
    healedCount: 3,
    avatar: '/vector-profiles/9.png'
  },
  {
    id: 4,
    date: 'Oct 19, 2023',
    time: '05:30 PM',
    evangelist: 'John Smith',
    department: 'CAMPUS MINISTRIES',
    contacts: 205,
    filledCount: 156,
    healedCount: 42,
    avatar: '' // Will use initials JS
  }
]

export const EVANGELISM_DETAILS = {
  id: 3, // Corresponds to Samuel Wright's record of 12 contacts
  reportPeriod: 'May 15 - May 21, 2024',
  leadEvangelist: 'Evang. David Miller',
  stats: {
    totalContacts: 12,
    spiritFilled: 8,
    healings: 3
  },
  chronicles: [
    {
      id: 101,
      name: 'Sarah Jenkins',
      phone: '(555) 123-4567',
      address: '124 Maple Street, Springfield',
      filledWithSpirit: true,
      healingWitnessed: true,
      description: 'Sarah had been suffering from chronic migraines for over three years. During the prayer, she felt a distinct "cool sensation" washing over her forehead. Immediately after, she reported that the pressure was completely gone. She was moved to tears and felt a profound sense of peace.',
      avatar: '/vector-profiles/12.png'
    },
    {
      id: 102,
      name: 'Marcus Thompson',
      phone: '(555) 987-5543',
      address: '892 River Road, Springfield',
      filledWithSpirit: true,
      healingWitnessed: false,
      description: 'Marcus was initially hesitant but opened up after discussing his struggles with finding purpose. During prayer for the Holy Spirit, he began to speak in tongues fluently. He expressed a new clarity of mind and has committed to joining the next Discipleship foundation course.',
      avatar: '/vector-profiles/23.png'
    },
    {
      id: 103,
      name: 'Elena Rodriguez',
      phone: '(555) 444-2211',
      address: '42 Pine View Ave, Springfield',
      filledWithSpirit: false,
      healingWitnessed: true,
      description: 'Elena had significant stiffness in her hands due to arthritis. Following prayer, she began moving her fingers freely without any pain for the first time in months. She joyfully demonstrated her grip strength and praised God for the instant relief.',
      avatar: '/vector-profiles/27.png'
    }
  ]
}
