import { CardExprience } from "./CardExprience";

export const Exprience = () => {
    const category =[
        {
          "year": "2024 - Present",
          "technology_name": "WEB DEVELOPER",
          "place": "Silicon Valley, USA"
        },
        {
          "year": "2007-2008",
          "technology_name": "JUNIOR GRAPHICS DESIGNER",
          "place": "Tokyo, Japan"
        },
        {
          "year": "2009-2010",
          "technology_name": "DESIGN & TECHNOLOGY",
          "place": "Dubai, UAE"
        },
        {
          "year": "2011-2012",
          "technology_name": "WEB DESIGN COURSE",
          "place": "Geneva, Switzerland"
        },
      ]
  return (
    <div className="w-1/2">
      <h1 className="text-5xl text-center font-bold bg-gradient-to-r from-[#7A47E0] to-[#7656b6] bg-clip-text text-transparent pb-10">
        My Experience
      </h1>
      <div>
      {
            category.map((detail, idx) => <CardExprience key={idx} detail={detail}></CardExprience> )
        }
       
      </div>
    </div>
  );
};
