services= [
    {title:"App Services", features: [
        "Mobile Applications",
        "Web Applications",
        "Cloud Native Applications",
        "Microservices",
        "AI Solutions",
        "Data Oriented Solutions"
    ]},

    {
        title:"Data Services", features: [
            "Database Cloud Services",
            "NoSQL database Services",
            "Cachig Services",
            "Warehouse services",
            "Data Analytics",
            "Business Intelligence"
        ]
    }
    ,
    {
        title:"Cloud Services", features: [
            "Virtual machines",
            "Virtual Network",
            "Cloud data services",
            "AI applications",
            "DNS Services"
        ]
    },
    {
        title: "Testing Services", features: [
            "Quality Assurance",
            "End to End Testing",
            "Mobile application Testing",
            "API testing"
        ]
    }
]

code = ""
for(let x in services) {
   code+="<div class='sbox'>"
   code+="<h3>"+services[x].title+"</h3>"
   code+="<ul>"
   for(let y in services[x].features){
     code+="<li>"+services[x].features[y]+"</li>"
   }
   code+="</ul>"
   code+="</div>"
}
document.getElementById("service-box").innerHTML=code