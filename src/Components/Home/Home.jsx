import { Link } from 'react-router-dom';
import './home.css';


const Home = () =>{
    
    return(
        
        <div className="top-section-ab">
            <div className="green-star-bar">
                
                    <img src="https://cdn.shopify.com/s/files/1/1381/2647/files/confidence_star_90x.png?v=1679592643"/>
                
                    <img src="https://cdn.shopify.com/s/files/1/1381/2647/files/confidence_star_90x.png?v=1679592643"/>
                
                    <img src="https://cdn.shopify.com/s/files/1/1381/2647/files/confidence_star_90x.png?v=1679592643"/>
                
                    <img src="https://cdn.shopify.com/s/files/1/1381/2647/files/confidence_star_90x.png?v=1679592643"/>
                
                    <img src="https://cdn.shopify.com/s/files/1/1381/2647/files/confidence_star_90x.png?v=1679592643"/>
                
                <span>100,000+ Five-Star Reviews</span>
            </div>
            <div className="image-text-btn-section">
                <div className="img-container img-container-d">
                    <img src="//cdn.shopify.com/s/files/1/1381/2647/files/shakes-d.png?v=1679598243"/>
                </div>
                <div className="img-container img-container-m">
                    <img src="//cdn.shopify.com/s/files/1/1381/2647/files/shakes-m.png?v=1679598252"/>
                </div>
                <div className="txt-container">
                    <h1>Plant-Based Shakes Built for Healthy Weight Loss</h1>
                    <h4>110 Calories, 0g Sugar, 26 Essential Vitamins &amp; Minerals, &amp; 15g of Plant-Based Protein.</h4>
                    <Link to="collections/meal-replacement-shakes">
                        Shop The All-In-One Meal
                    </Link>
                </div>
            </div>
            <div className="index-green-bar">
                <div className="container">
                    <div className="green-row">
                    
                    <div className="selling-point">
                        <div className="icon-img">
                        <img src="//cdn.shopify.com/s/files/1/1381/2647/files/confidence_star_90x.png?v=1679592643"/>
                        </div>
                        <div className="right-side-desk">
                        <div className="bold-title">
                            154,000+ VERIFIED REVIEWS
                        </div>
                        <div className="sub-title">4.7 out of 5 stars average</div>
                        </div>
                    </div>
                    
                    <div className="selling-point">
                        <div className="icon-img">
                        <img src="//cdn.shopify.com/s/files/1/1381/2647/files/checkmark_confidence_90x.png?v=1679592653"/>
                        </div>
                        <div className="right-side-desk">
                        <div className="bold-title">
                            30 DAY MONEY BACK GUARANTEE
                        </div>
                        <div className="sub-title">Get support via phone, chat, or email!</div>
                        </div>
                    </div>
                    
                    <div className="selling-point">
                        <div className="icon-img">
                        <img src="//cdn.shopify.com/s/files/1/1381/2647/files/celebration_confidence_90x.png?v=1679592660"/>
                        </div>
                        <div className="right-side-desk">
                        <div className="bold-title">
                            OVER 4 MILLION SHAKES SOLD
                        </div>
                        <div className="sub-title">Celebrating over 8 years of serving our customers</div>
                        </div>
                    </div>
                    
                    </div>
                </div>
            </div>
</div>)
}

export default Home;