import { CardEducation } from "./CardEducation"

export const Education = () => {
    const educationCategory = [
        {
            "year": "2013-2014",
            "technology_name": "WEB DEVELOPER",
            "place": "Cambridge, UK"
          },
          {
            "year": "2015-2016",
            "technology_name": "GRAPHIC DESIGN COURSE",
            "place": "Sydney, Australia"
          },
          {
            "year": "2017-2018",
            "technology_name": "WEB DESIGN COURSE",
            "place": "Seoul, South Korea"
          },
          {
            "year": "2019-2020",
            "technology_name": "DESIGN & TECHNOLOGY",
            "place": "Rio de Janeiro, Brazil"
          }
    ]
  return (
    <div className="w-1/2">
        <h1 className="text-5xl text-center font-bold bg-gradient-to-r from-[#7A47E0] to-[#7656b6] bg-clip-text text-transparent pb-10">My Education</h1>
        <div>
      {
            educationCategory.map((detail, idx) => <CardEducation key={idx} detail={detail}></CardEducation>)
        }
       
      </div>
    </div>
  )
}
