const scores = [
    { score: 90, subject: 'HTML', weight: 0.2 },
    { score: 95, subject: 'CSS', weight: 0.3 },
    { score: 85, subject: 'JavaScript', weight: 0.5 }
  ];

  scores.reduce((result, element) => result += element.score * element.weight,0)