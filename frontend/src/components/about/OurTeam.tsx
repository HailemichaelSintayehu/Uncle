// components/Team/Team.tsx
import React from 'react';
import '../../../public/assets/scss/component/_our-team.scss';

const teamMembers = [
  {
    name: 'Jaydee “Jay” Tarpeh',
    role: 'Founder and CEO',
    image: '/assets/img/team/Ceo.jpg',
  },
  {
    name: 'Youngje “Jay” Lee',
    role: 'CFO',
    image: '/assets/img/team/Cfo.jpeg',
  },
  {
    name: 'Hailemichael “Mike” Sintayehu',
    role: 'CTO',
    image: '',
  },
];

const getInitials = (name: string) => {
  const names = name.split(' ');
  const firstNameInitial = names[0][0];
  const lastNameInitial = names[names.length - 1][0];
  return `${firstNameInitial}${lastNameInitial}`;
};

const OurTeam: React.FC = () => {
  return (
    <div className="container">
      <h1 className="team">Meet Our Team</h1>
      <div className="team">
        {teamMembers.map((member, index) => (
          <div key={index} className="member">
            {member.image ? (
              <img src={member.image} alt={member.name} className="image" />
            ) : (
              <div className="initials">
                {getInitials(member.name)}
              </div>
            )}
            <div className="info">
              <h3 className="name">{member.name}</h3>
              <p className="role">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
