import { useState, useEffect, useRef } from 'react'
import { clsx } from 'clsx';

import data from '../../../data.json'

const ExerciseTwo = () => {
    const [firstRender, isFirstRender] = useState(false)

    const checkFirstRender = useRef(true);
    useEffect(() => {
        if (checkFirstRender.current) {
            checkFirstRender.current = false;
            return;
        }
        isFirstRender(true);
    }, []);

    return (
        <div id="exercise-two" className="col-lg-8 p-5 mx-auto main-container">
            <div id="tab-interface">
                <nav>
                    <div className="nav nav-pills" id="nav-tab" role="tablist">
                        {data.map((item, index) => (
                            <button className={clsx('nav-link', (firstRender && index === 0) && 'active')} id={`nav-${index}`} data-bs-toggle="tab" data-bs-target={`#nav-tab-${index}`} type="button" role="tab" aria-controls={`nav-tab-${index}`}>{item.title}</button>
                        ))}

                    </div>
                </nav>
                <div className="tab-content p-3" id="nav-tabContent">
                    {data.map((item, index) => (
                        <div className={clsx('tab-pane', 'fade', 'p-3', (firstRender && index === 0) && 'show', (firstRender && index === 0) && 'active')} id={`nav-tab-${index}`} role="tabpanel" aria-labelledby={`#nav-${index}`} tab-index={index}>
                            <div dangerouslySetInnerHTML={{ __html: `${item.content}` }} />
                        </div>
                    ))}
                </div>
            </div>

            <div className="accordion" id="accordion-interface">
                {
                    data.map((item, index) => {
                        return (
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className={clsx('accordion-button', (firstRender && index > 0) && 'collapsed')} type="button" data-bs-toggle="collapse" data-bs-target={`#collapse-${index}`} aria-expanded="false" aria-controls={`collapse-${index}`} >
                                        {item.title}
                                    </button>
                                </h2>
                                <div id={`collapse-${index}`} className={clsx('accordion-collapse', 'collapse', (firstRender && index === 0) && 'show')} data-bs-parent="#accordion-interface">
                                    <div className="accordion-body">
                                        <div dangerouslySetInnerHTML={{ __html: `${item.content}` }} />
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

            </div>

        </div >
    )
}

export default ExerciseTwo