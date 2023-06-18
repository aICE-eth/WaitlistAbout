import './App.css';
import Logo from './images/3D_CC_Logo(black).svg';

function About({ onNavigate }) {
    const handleGoBack = () => {
      onNavigate();
    };
    return ( 
        <div>
        <div className="header-bar">
            <img src={Logo} alt="Logo" className="logo" />
            <h1 className="header-title">
            <span className="header-title-course">Course</span>
            <span className="header-title-cubes">Cubes</span>
            </h1>
            <div className="about-us-text">About Us</div>
        </div>
        <div className="about-us-container">
            <div className="paragraph-container">
            <h4>Problem:</h4>
            <p>The way the new generation likes to consume content has drastically changed but education hasn’t yet caught up with this shift. In particular, the rise of platforms like TikTok has demonstrated Gen Z's affinity for engaging short-form content which current education formats do not yet align with. </p>
            <h4>Solution:</h4>
            <p>Content Consumer Side: CourseCubes is an AI Social Learning Platform that caters to the learning preferences of the new generation. Through our platform, users can easily enroll in courses carefully crafted into 10-15 minute bite-sized modules of easily digestible content. These modules are thoughtfully presented on their personalized "Curated For You" page, following a linear course progression that ensures a cohesive and structured learning experience, as opposed to random pieces of information.</p>
            <p>Content Creator Side: The other challenge lies in the difficulty of producing educational content of high quality. While platforms like TikTok enable the creation of engaging content with a simple click, the task of developing comprehensive educational materials is considerably more challenging. CourseCubes addresses this issue by offering AI tools that swiftly transform audio and textbook resources into visually appealing slides. By alleviating the burdensome aspects of course creation, we empower creators to devote their time and energy to crafting captivating content that enhances the learning experience.</p>
            <h4>Why we are different:</h4>
            <p>Other companies including Tik Tok have attempted to do something similar with their STEM page but they have failed to create something meaningful due to the fragmented nature of their random bite-sized pieces of content that lack synchronization. In contrast, our platform takes a unique approach by offering long-form courses split into short digestible chunks that delve into subjects in depth and follow a linear progression. Users have the opportunity to curate their own content experience by enrolling in courses that align with their interests and learning goals.</p>
            <p className='coming-soon'>Coming soon...</p>
            </div>
            <button onClick={onNavigate}>Go Back</button>
        </div>
        </div>
     );
}
 
export default About;