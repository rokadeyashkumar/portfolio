import React from 'react';
import '../showcase/showcase.scss';

const Showcase = () => {
    return (
        <div className='creative-section'>
            <div className='content-showcase'>
                <h2>Bringing Your Vision to Life Through Design.</h2>
                <p>From concept to execution, I transform ideas into stunning digital experiences. Explore my creative journey through design, development, and the resources I share.</p>
            </div>

            <div className="gradient-overlay"></div>

            <div className='image-showcase'>
                <div className="marquee-wrapper">
                    <div className="marquee-line top-line">
                        {[...Array(1)].map((_, i) => (
                            <>
                                <img key={`t1-${i}`} src="https://emeritus.org/in/wp-content/uploads/sites/3/2022/05/ui-ux-1024x657.jpg.optimal.jpg" alt="Creative Image" />
                                <img key={`t2-${i}`} src="https://itechnasik.com/wp-content/uploads/2023/07/uidesign-1024x1024.jpg" alt="Creative Image" />
                                <img key={`t3-${i}`} src="https://itechnasik.com/wp-content/uploads/2023/07/uidesign-1024x1024.jpg" alt="Creative Image" />
                                
                            </>
                        ))}
                    </div>
                    <div className="marquee-line middle-line">
                        {[...Array(1)].map((_, i) => (
                            <>
                                <img key={`m1-${i}`} src="https://itechnasik.com/wp-content/uploads/2023/07/uidesign-1024x1024.jpg" alt="Creative Image" />
                                <img key={`m2-${i}`} src="https://www.dejaoffice.com/blog/wp-content/uploads/2023/12/shutterstock_1401013232.jpg" alt="Creative Image" />
                                <img key={`m3-${i}`} src="https://itechnasik.com/wp-content/uploads/2023/07/uidesign-1024x1024.jpg" alt="Creative Image" />
                            </>
                        ))}
                    </div>
                    <div className="marquee-line bottom-line">
                        {[...Array(1)].map((_, i) => (
                            <>
                                <img key={`b1-${i}`} src="https://itechnasik.com/wp-content/uploads/2023/07/uidesign-1024x1024.jpg" alt="Creative Image" />
                                <img key={`b2-${i}`} src="https://emeritus.org/in/wp-content/uploads/sites/3/2022/05/ui-ux-1024x657.jpg.optimal.jpg" alt="Creative Image" />
                                <img key={`b3-${i}`} src="https://itechnasik.com/wp-content/uploads/2023/07/uidesign-1024x1024.jpg" alt="Creative Image" />
                            </>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Showcase;
