import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut, TwitterAuthProvider } from "firebase/auth";
import app from './../../firebase';
import { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Login = () => {
   const [user, setUser] = useState(null);
   const auth = getAuth(app);
   // console.log(auth)
   const goggleProvider = new GoogleAuthProvider();
   const GithubProvider = new GithubAuthProvider();
   const TwitterProvider = new TwitterAuthProvider();
   //handle authentication
   //Google
   const handleGoogleSignIn = () => {
      signInWithPopup(auth, goggleProvider)
         .then(result => {
            const logdInUser = result.user;
            console.log(logdInUser);
            setUser(logdInUser);
         })
         .catch(err => { console.log(err) });
   }
   //githib
   const handleGithubSingnIn = () => {
      signInWithPopup(auth, GithubProvider)
         .then(result => {
            const logdInUser = result.user;
            console.log(logdInUser)
            setUser(logdInUser)
         })
         .catch(err => console.log(err))
   }
   //twitter
   const handleTwitterSingnIn = () => {
      signInWithPopup(auth, TwitterProvider)
         .then(result => {
            const LoggedUser = result.user;
            console.log(LoggedUser)
            setUser(LoggedUser);
         })
         .catch(err => console.log(err))
   }
   //handle signOut 
   const handleSignOut = () => {
      signOut(auth)
         .then(setUser(null))
         .catch(console.log(`Logout Faild`))
   }
   //github_intitgraion 
   return (
      <div className="h-dvh flex justify-center items-center">
         {user &&
            <div>
               <p>UserName : {user.displayName}</p>
               <p>Email:{user.email}</p>
            </div>}
         <div className="hero bg-base-900 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
               <div className="card bg-indigo-800 w-full max-w-sm shrink-0 shadow-2xl">
                  <form className="card-body">
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" required />
                     </div>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                           <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                     </div>
                     <button className="px-10 btn btn-primary">Login</button>
                     <div className="form-control mt-6">
                        {user ? <button onClick={handleSignOut} className="btn btn-primary mt-5">Sign Out</button> :
                           <div>
                              <p className="text-sm mb-3"> Or Loggin with,</p>
                              <div className="flex justify-around space-x-1 bg-primary text-black p-2 rounded-xl">
                                 <button onClick={handleGoogleSignIn} className="text-xl "> <FaGoogle /> </button>
                                 <button onClick={handleGithubSingnIn} className="text-xl "> <FaGithub /></button>
                                 <button onClick={handleTwitterSingnIn} className="text-xl "><FaTwitter /></button>
                              </div>
                           </div>}
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Login;