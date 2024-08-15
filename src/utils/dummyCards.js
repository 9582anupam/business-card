const cards = [
    {
        name: "Alice Johnson",
        company: "Tech Innovations",
        email: "alice.johnson@techinnovations.com",
        phone: "+1-555-123-4567",
        type: "Manager",
        "img src":
            "https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=Asv2DU3rA_5D1xSe22xZK47WEAN0wjWeFOhzd13ujW4",
    },
    {
        name: "Bob Smith",
        company: "Creative Solutions",
        email: "bob.smith@creativesolutions.com",
        phone: "+1-555-234-5678",
        type: "Designer",
        "img src":
            "https://fastly.picsum.photos/id/1/5000/3333.jpg?hmac=Asv2DU3rA_5D1xSe22xZK47WEAN0wjWeFOhzd13ujW4",
    },
    {
        name: "Carol Davis",
        company: "Marketing Pros",
        email: "carol.davis@marketingpros.com",
        phone: "+1-555-345-6789",
        type: "Marketing Specialist",
        "img src":
            "https://fastly.picsum.photos/id/2/5000/3333.jpg?hmac=Asv2DU3rA_5D1xSe22xZK47WEAN0wjWeFOhzd13ujW4",
    },
    {
        name: "David Brown",
        company: "Finance Gurus",
        email: "david.brown@financegurus.com",
        phone: "+1-555-456-7890",
        type: "Accountant",
        "img src":
            "https://fastly.picsum.photos/id/3/5000/3333.jpg?hmac=Asv2DU3rA_5D1xSe22xZK47WEAN0wjWeFOhzd13ujW4",
    },
    {
        name: "Emily Wilson",
        company: "Health Experts",
        email: "emily.wilson@healthexperts.com",
        phone: "+1-555-567-8901",
        type: "Consultant",
        "img src":
            "https://fastly.picsum.photos/id/4/5000/3333.jpg?hmac=Asv2DU3rA_5D1xSe22xZK47WEAN0wjWeFOhzd13ujW4",
    },
    {
        name: "Frank Harris",
        company: "Web Wizards",
        email: "frank.harris@webwizards.com",
        phone: "+1-555-678-9012",
        type: "Web Developer",
        "img src":
            "https://fastly.picsum.photos/id/5/5000/3333.jpg?hmac=Asv2DU3rA_5D1xSe22xZK47WEAN0wjWeFOhzd13ujW4",
    },
    {
        name: "Grace Lee",
        company: "Data Dynamics",
        email: "grace.lee@datadynamics.com",
        phone: "+1-555-789-0123",
        type: "Data Analyst",
        "img src":
            "https://fastly.picsum.photos/id/6/5000/3333.jpg?hmac=Asv2DU3rA_5D1xSe22xZK47WEAN0wjWeFOhzd13ujW4",
    },
    {
        name: "Hank Miller",
        company: "Global Solutions",
        email: "hank.miller@globalsolutions.com",
        phone: "+1-555-890-1234",
        type: "Project Manager",
        "img src":
            "https://fastly.picsum.photos/id/7/5000/3333.jpg?hmac=Asv2DU3rA_5D1xSe22xZK47WEAN0wjWeFOhzd13ujW4",
    },
    {
        name: "Ivy Martinez",
        company: "Tech Pioneers",
        email: "ivy.martinez@techpioneers.com",
        phone: "+1-555-901-2345",
        type: "Software Engineer",
        "img src":
            "https://fastly.picsum.photos/id/8/5000/3333.jpg?hmac=Asv2DU3rA_5D1xSe22xZK47WEAN0wjWeFOhzd13ujW4",
    },
    {
        name: "Jack Thompson",
        company: "Consulting Co.",
        email: "jack.thompson@consultingco.com",
        phone: "+1-555-012-3456",
        type: "Business Consultant",
        "img src":
            "https://fastly.picsum.photos/id/9/5000/3333.jpg?hmac=Asv2DU3rA_5D1xSe22xZK47WEAN0wjWeFOhzd13ujW4",
    },
    {
        name: "Kara Adams",
        company: "Design Studio",
        email: "kara.adams@designstudio.com",
        phone: "+1-555-123-4568",
        type: "Creative Director",
        "img src":
            "https://fastly.picsum.photos/id/10/5000/3333.jpg?hmac=Asv2DU3rA_5D1xSe22xZK47WEAN0wjWeFOhzd13ujW4",
    },
    {
        name: "Leo Wilson",
        company: "Health Innovations",
        email: "leo.wilson@healthinnovations.com",
        phone: "+1-555-234-5679",
        type: "Health Consultant",
        "img src":
            "https://fastly.picsum.photos/id/11/5000/3333.jpg?hmac=Asv2DU3rA_5D1xSe22xZK47WEAN0wjWeFOhzd13ujW4",
    },
    {
        name: "Mia Roberts",
        company: "Finance Experts",
        email: "mia.roberts@financeexperts.com",
        phone: "+1-555-345-6780",
        type: "Financial Advisor",
        "img src":
            "https://fastly.picsum.photos/id/12/5000/3333.jpg?hmac=Asv2DU3rA_5D1xSe22xZK47WEAN0wjWeFOhzd13ujW4",
    },
    {
        name: "Nate Scott",
        company: "Marketing Magic",
        email: "nate.scott@marketingmagic.com",
        phone: "+1-555-456-7891",
        type: "Marketing Manager",
        "img src":
            "https://fastly.picsum.photos/id/13/5000/3333.jpg?hmac=Asv2DU3rA_5D1xSe22xZK47WEAN0wjWeFOhzd13ujW4",
    },
    {
        name: "Olivia Taylor",
        company: "Creative Ventures",
        email: "olivia.taylor@creativeventures.com",
        phone: "+1-555-567-8902",
        type: "Graphic Designer",
        "img src":
            "https://fastly.picsum.photos/id/14/5000/3333.jpg?hmac=Asv2DU3rA_5D1xSe22xZK47WEAN0wjWeFOhzd13ujW4",
    },
    {
        name: "Paul King",
        company: "Tech Forward",
        email: "paul.king@techforward.com",
        phone: "+1-555-678-9013",
        type: "IT Specialist",
        "img src":
            "https://fastly.picsum.photos/id/15/5000/3333.jpg?hmac=Asv2DU3rA_5D1xSe22xZK47WEAN0wjWeFOhzd13ujW4",
    },
];

export default cards;