import '../../node_modules/font-awesome/css/font-awesome.min.css'; 
import "../css/SocialLogin.css";
export default function SocialLogin() {
  return (
    <div className="container-sl">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
        <div className="row">
          <div className="vl">
          </div>
        </div>
      <div className="col-sl">
        <a href="#" className="fb btn-sl">
          <i className="fa fa-facebook fa-fw"></i> Login with Facebook
         </a>
        <a href="#" className="twitter btn-sl">
          <i className="fa fa-twitter fa-fw"></i> Login with Twitter
        </a>
        <a href="#" className="google btn-sl"><i className="fa fa-google fa-fw">
          </i> Login with Google+
        </a>
      </div>
    </div>
  );
}
