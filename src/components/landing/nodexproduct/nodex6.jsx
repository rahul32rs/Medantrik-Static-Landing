import React from "react";

// Lightweight UI primitives (no external libs required)
const Card = ({ className = "", children }) => (
  <div className={`rounded-2xl shadow-md border border-orange-100 bg-white ${className}`}>{children}</div>
);
const CardHeader = ({ children }) => (
  <div className="px-6 pt-6 pb-2">{children}</div>
);
const CardTitle = ({ className = "", children }) => (
  <h3 className={`text-xl font-semibold text-orange-600 flex items-center gap-2 ${className}`}>{children}</h3>
);
const CardContent = ({ children }) => (
  <div className="px-6 pb-6 pt-2">{children}</div>
);
const Check = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

export default function Nodex6() {
  const features = [
    {
      title: "For Patients",
      // icon: "🩺",
      points: [
        "Clear medication effectiveness tracking",
        "Visual representation of lung improvement",
        "Share detailed reports with your doctor",
        "Get personalized medicine recommendations",
      ],
    },
    {
      title: "For Wellness Users",
      // icon: "❤️",
      points: [
        "Track lung condition if you're a smoker",
        "Monitor impact of pollution on lung health",
        "Follow guided daily breathing exercises",
        "Share reports with doctors for consultation",
      ],
    },
    {
      title: "For Athletes",
      // icon: "🏃",
      points: [
        "Training programs for lung capacity improvement",
        "Track measurable performance improvements",
        "Learn advanced breathing techniques",
        "Monitor recovery after intense training",
      ],
    },
  ];

  return (
    <section className="w-full py-16 bg-gradient-to-b from-white to-orange-50/60">
      <div className="max-w-7xl mx-auto px-4 text-center">

        <div className="text-center pb-10 sm:pb-12">
          <h2 className="text-3xl md:text-[44px] lg:text-[48px] font-semibold leading-tight tracking-tight">
            Smart Applications for <br />
            <span className="inline-block bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 bg-clip-text text-transparent">
              Everyone
            </span>
          </h2>
        </div>
       

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Mobile App Image (place your file in public/products/mbapp.png) */}
          <div className="flex justify-center items-center">
  <img
    src="/images/products/mbapp.png"
    alt="Nodex Mobile App"
    className="max-w-full h-auto md:w-[450px] lg:w-[720px] object-contain"
    loading="lazy"
  />
</div>


          {/* Bulleted value props */}
          <div className="text-left">
             <p className="text-gray-600 max-w-3xl mx-auto mb-12">
          See your lung health in a simplified yet accurate way. The Nodex app helps you visualize how your lungs are affected
          by pollution, disease, or other factors, allowing you to monitor your respiratory health and take informed actions.
        </p>
            <ul className="space-y-4 text-gray-700">
              {[
                "User-friendly interface with intuitive health metrics",
                "Visual progress tracking with trend analysis",
                "Personalized insights and recommendations",
                "Secure data sharing with healthcare providers",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-0.5 text-orange-500"><Check /></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Audience cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle>
                  <span className="text-2xl">{feature.icon}</span>
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {feature.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="mt-0.5 text-orange-500"><Check /></span>
                      <span className="text-gray-700 text-sm">{point}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
