import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./HomePage.css";
import Banner from "../../components/Banner/Banner";
import Row from "../../components/Row/Row";
function HomePage() {
    return(
        <div>
            <Navbar showSignInButton={false} logOut={true}/>
            <Banner />
            <Row 
             title="MOVIE BOX HITS"
             fetchUrl="https://api.themoviedb.org/3/trending/all/week?api_key=e6ee90a8246284b4cd4ee914ebedb095&language=en-US"
             isLargeRow
           />
           <Row
             title="MOVIE BOX HITS"
             fetchUrl="https://api.themoviedb.org/3/trending/all/week?api_key=e6ee90a8246284b4cd4ee914ebedb095&&with_networks=123"
           />
           <Row
             title="ACTION MOVIE"
             fetchUrl="https://api.themoviedb.org/3/trending/all/week?api_key=e6ee90a8246284b4cd4ee914ebedb095&with_genres=28"
           />
           <Row
             title="MOVIE BOX HITS"
             fetchUrl="https://api.themoviedb.org/3/trending/all/week?api_key=e6ee90a8246284b4cd4ee914ebedb095&language=en-US"
           />
           <Row
             title="MOVIE BOX HITS"
             fetchUrl="https://api.themoviedb.org/3/trending/all/week?api_key=e6ee90a8246284b4cd4ee914ebedb095&language=en-US"
            />
        </div>
    )
}
export default HomePage;