export default function Newsletter() {
  return (
    <>
    <section id='price_section'>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          {/* CTA box */}
          <div
            className="relative bg-gray-900 rounded py-10 px-8 md:py-16 md:px-12 shadow-2xl overflow-hidden"
            data-aos="zoom-y-out"
          >
            {/* Background illustration */}
            <div
              className="absolute right-0 bottom-0 pointer-events-none hidden lg:block"
              aria-hidden="true"
            >
              <svg width="428" height="328" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <radialGradient
                    cx="35.542%"
                    cy="34.553%"
                    fx="35.542%"
                    fy="34.553%"
                    r="96.031%"
                    id="ni-a"
                  >
                    <stop stopColor="#DFDFDF" offset="0%" />
                    <stop stopColor="#4C4C4C" offset="44.317%" />
                    <stop stopColor="#333" offset="100%" />
                  </radialGradient>
                </defs>
                <g fill="none" fillRule="evenodd">
                  <g fill="#FFF">
                    <ellipse
                      fillOpacity=".04"
                      cx="185"
                      cy="15.576"
                      rx="16"
                      ry="15.576"
                    />
                    <ellipse
                      fillOpacity=".24"
                      cx="100"
                      cy="68.402"
                      rx="24"
                      ry="23.364"
                    />
                    <ellipse
                      fillOpacity=".12"
                      cx="29"
                      cy="251.231"
                      rx="29"
                      ry="28.231"
                    />
                    <ellipse
                      fillOpacity=".64"
                      cx="29"
                      cy="251.231"
                      rx="8"
                      ry="7.788"
                    />
                    <ellipse
                      fillOpacity=".12"
                      cx="342"
                      cy="31.303"
                      rx="8"
                      ry="7.788"
                    />
                    <ellipse
                      fillOpacity=".48"
                      cx="62"
                      cy="126.811"
                      rx="2"
                      ry="1.947"
                    />
                    <ellipse
                      fillOpacity=".12"
                      cx="78"
                      cy="7.072"
                      rx="2"
                      ry="1.947"
                    />
                    <ellipse
                      fillOpacity=".64"
                      cx="185"
                      cy="15.576"
                      rx="6"
                      ry="5.841"
                    />
                  </g>
                  <circle fill="url(#ni-a)" cx="276" cy="237" r="200" />
                </g>
              </svg>
            </div>

            <div className="relative flex flex-col lg:flex-row justify-between items-center">
              <div >
                <p className="text-xl text-yellow-100 ">GREAT PRODUCT, GREAT PRICE</p>
                <h1 className="text-5xl text-white">Simple, fair pricing.</h1>
              </div>
              <div>
                <div className=" bg-white p-8 rounded flex justify-center text-center flex-col">
                  <h5 className="bg-gray-100 my-2 rounded-2xl p-1">METRICS MATTER</h5>
                  <p className="text-sm">(Basic Performance Visibility)</p>
                  <h3 className="font-bold">$<span className="text-5xl">1.99</span>/user/month</h3>
                  <ul className="pt-3 text-gray-500">
                    <li>Daily & Weekly Reports</li>
                    <li>Real-Time Leaderboards</li>
                    <li>Email Support</li>
                  </ul>
                  <button className="m-2 mt-3 p-2 bg-blue-700 text-white rounded">Learn more</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
       {/* Section header */}
       <div className="max-w-3xl mx-auto mb-16 text-center pb-12 md:pb-16" id="about_us">
            <h2 className="h2 mb-4">About Us</h2>
            <p className="text-xl text-gray-600" data-aos="zoom-y-out">Super Sale is dedicated to revolutionizing the way sales teams collaborate and thrive. Our mission is to make sales tracking and motivation fun and efficient. We're here to support your team's success every step of the way.
</p>
          </div>
    </>
  );
}
