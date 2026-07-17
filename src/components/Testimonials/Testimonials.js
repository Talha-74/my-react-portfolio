import React, { useContext, useState } from 'react';

import { FaQuoteLeft, FaArrowRight, FaArrowLeft } from 'react-icons/fa';

import { ThemeContext } from '../../contexts/ThemeContext';
import { testimonialsData } from '../../data/testimonialsData';

import './Testimonials.css';

function Testimonials() {
    const { theme } = useContext(ThemeContext);
    const [activeTestimonial, setActiveTestimonial] = useState(0);

    const gotoNext = () => {
        setActiveTestimonial((current) => (current + 1) % testimonialsData.length);
    };

    const gotoPrev = () => {
        setActiveTestimonial((current) => (current - 1 + testimonialsData.length) % testimonialsData.length);
    };

    return (
        <>
            {testimonialsData.length > 0 && (
                <div
                    className='testimonials'
                    style={{ backgroundColor: theme.primary }}
                >
                    <div className='testimonials--header'>
                        <h1 style={{ color: theme.secondary }}>Testimonials</h1>
                    </div>
                    <div className='testimonials--body'>
                        <FaQuoteLeft
                            className='quote'
                            style={{ color: theme.secondary }}
                        />
                        <div
                            className='testimonials--slider'
                            style={{ backgroundColor: theme.primary }}
                        >
                            {testimonialsData.map((test, index) => (
                                    <div
                                        className={`single--testimony ${index === activeTestimonial ? 'single--testimony-active' : ''}`}
                                        key={test.id}
                                        hidden={index !== activeTestimonial}
                                    >
                                        <div className='testimonials--container'>
                                            <div
                                                className='review--img'
                                                style={{
                                                    backgroundColor:
                                                        theme.secondary,
                                                }}
                                            >
                                                <img
                                                    src={test.image}
                                                    alt={test.name}
                                                />
                                            </div>
                                            <div
                                                className='review--content'
                                                style={{
                                                    backgroundColor:
                                                        theme.secondary,
                                                    color: theme.tertiary,
                                                }}
                                            >
                                                <p>{test.text}</p>
                                                <h1>{test.name}</h1>
                                                <h4>{test.title}</h4>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            <button
                                className='prevBtn'
                                onClick={gotoPrev}
                                style={{ backgroundColor: theme.secondary }}
                            >
                                <FaArrowLeft
                                    style={{ color: theme.primary }}
                                    aria-label='Previous testimonial'
                                />
                            </button>
                            <button
                                className='nextBtn'
                                onClick={gotoNext}
                                style={{ backgroundColor: theme.secondary }}
                            >
                                <FaArrowRight
                                    style={{ color: theme.primary }}
                                    aria-label='Next testimonial'
                                />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Testimonials;
