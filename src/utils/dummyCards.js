const images = [
    "https://media.geeksforgeeks.org/wp-content/uploads/20200316135008/red7.png",
    "https://media.geeksforgeeks.org/wp-content/uploads/20200316135014/yellow3.png",
    "https://media.geeksforgeeks.org/img-practice/MaskGroup58@2x-min-1637846347.png",
    "https://media.geeksforgeeks.org/img-practice/banner/dsa-self-paced-course-overview-image.png",
    "https://media.geeksforgeeks.org/img-practice/banner/complete-interview-preparation-thumbnail.png",
    "https://media.geeksforgeeks.org/img-practice/banner/Amazon-Test-Series-thumbnail.png",
    "https://media.geeksforgeeks.org/img-practice/banner/dsa-self-paced-thumbnail.png"
];

const cards = [
    { name: "Alice Johnson", company: "Tech Innovations", email: "alice.johnson@techinnovations.com", phone: "+1-555-123-4567", type: "Manager" },
    { name: "Bob Smith", company: "Creative Solutions", email: "bob.smith@creativesolutions.com", phone: "+1-555-234-5678", type: "Designer" },
    { name: "Carol Davis", company: "Marketing Pros", email: "carol.davis@marketingpros.com", phone: "+1-555-345-6789", type: "Marketing Specialist" },
    { name: "David Brown", company: "Finance Gurus", email: "david.brown@financegurus.com", phone: "+1-555-456-7890", type: "Accountant" },
    { name: "Emily Wilson", company: "Health Experts", email: "emily.wilson@healthexperts.com", phone: "+1-555-567-8901", type: "Consultant" },
    { name: "Frank Harris", company: "Web Wizards", email: "frank.harris@webwizards.com", phone: "+1-555-678-9012", type: "Web Developer" },
    { name: "Grace Lee", company: "Data Dynamics", email: "grace.lee@datadynamics.com", phone: "+1-555-789-0123", type: "Data Analyst" },
    { name: "Hank Miller", company: "Global Solutions", email: "hank.miller@globalsolutions.com", phone: "+1-555-890-1234", type: "Project Manager" },
    { name: "Ivy Martinez", company: "Tech Pioneers", email: "ivy.martinez@techpioneers.com", phone: "+1-555-901-2345", type: "Software Engineer" },
    { name: "Jack Thompson", company: "Consulting Co.", email: "jack.thompson@consultingco.com", phone: "+1-555-012-3456", type: "Business Consultant" },
    { name: "Kara Adams", company: "Design Studio", email: "kara.adams@designstudio.com", phone: "+1-555-123-4568", type: "Creative Director" },
    { name: "Leo Wilson", company: "Health Innovations", email: "leo.wilson@healthinnovations.com", phone: "+1-555-234-5679", type: "Health Consultant" },
    { name: "Mia Roberts", company: "Finance Experts", email: "mia.roberts@financeexperts.com", phone: "+1-555-345-6780", type: "Financial Advisor" },
    { name: "Nate Scott", company: "Marketing Magic", email: "nate.scott@marketingmagic.com", phone: "+1-555-456-7891", type: "Marketing Manager" },
    { name: "Olivia Taylor", company: "Creative Ventures", email: "olivia.taylor@creativeventures.com", phone: "+1-555-567-8902", type: "Graphic Designer" },
    { name: "Paul King", company: "Tech Forward", email: "paul.king@techforward.com", phone: "+1-555-678-9013", type: "IT Specialist" }
].map((card, index) => ({
    ...card,
    imgSrc: images[index % images.length]
}));

export default cards;
