const Home = () => {
   return (
      <div>
         <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
               <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW6eyjw-sncwZxtTnaQj66DdHF2PJ0uL6PGQ&s"
                  className="max-w-sm rounded-lg shadow-2xl" />
               <div className="">
                  <h1 className="text-5xl font-bold">React Firebase Authentication</h1>
                  <p className="py-6">
                     Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                     quasi. In deleniti eaque aut repudiandae et a id nisi.
                  </p>
                  <button className="btn btn-error">Get Started</button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Home;