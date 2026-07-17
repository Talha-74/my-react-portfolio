import React, { Suspense, useEffect, useState } from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';

import './Landing.css';
import { headerData } from '../../data/headerData';
import { socialsData } from '../../data/socialsData';
import { PrimaryButton, SecondaryButton } from '../ui';
import LoadingFallback from '../ui/LoadingFallback';

const LampScene = React.lazy(() => import('./LampScene'));

function Landing() {
    const [canUseLampScene, setCanUseLampScene] = useState(false);

    useEffect(() => {
        const reduceMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        const mobileQuery = window.matchMedia('(max-width: 900px)');
        const updateLampScene = () => setCanUseLampScene(!reduceMotionQuery.matches && !mobileQuery.matches);

        updateLampScene();
        reduceMotionQuery.addEventListener('change', updateLampScene);
        mobileQuery.addEventListener('change', updateLampScene);

        return () => {
            reduceMotionQuery.removeEventListener('change', updateLampScene);
            mobileQuery.removeEventListener('change', updateLampScene);
        };
    }, []);

    const socialLinks = [
        { label: 'GitHub', href: socialsData.github },
        { label: 'LinkedIn', href: socialsData.linkedIn },
        { label: 'Twitter', href: socialsData.twitter },
    ].filter((item) => item.href);

    return (
        <section className='landing signal-hero' id='home' aria-labelledby='hero-title'>
            <div className='signal-hero__backdrop' aria-hidden='true' />
            <div className='signal-hero__lamp-fallback' aria-hidden='true'>
                <span className='signal-hero__cable' />
                <span className='signal-hero__shade' />
                <span className='signal-hero__beam' />
            </div>
            {canUseLampScene && (
                <Suspense fallback={<div className='signal-hero__loader'><LoadingFallback label='Warming lamp' /></div>}>
                    <LampScene />
                </Suspense>
            )}

            <div className='signal-hero__content'>
                <p className='signal-hero__eyebrow'>{headerData.heroEyebrow}</p>
                <div className='signal-hero__grid'>
                    <div className='signal-hero__name' aria-hidden='true'>
                        <span>TALHA</span>
                        <span>KHAN</span>
                    </div>
                    <div className='signal-hero__copy'>
                        <ul className='signal-hero__roles' aria-label='Professional focus areas'>
                            {headerData.heroRoles.map((role) => (
                                <li key={role}>{role}</li>
                            ))}
                        </ul>
                        <h1 id='hero-title'>{headerData.heroStatement}</h1>
                        <p>{headerData.desciption}</p>
                        <div className='signal-hero__actions' aria-label='Primary actions'>
                            <PrimaryButton as={NavLink} to='/#projects' smooth>
                                View selected work <span aria-hidden='true'>→</span>
                            </PrimaryButton>
                            <SecondaryButton as={NavLink} to='/#contacts' smooth>
                                Start a conversation
                            </SecondaryButton>
                        </div>
                    </div>
                </div>
                <div className='signal-hero__meta'>
                    <span>{headerData.title}</span>
                    {socialLinks.length > 0 && (
                        <nav aria-label='Social links'>
                            {socialLinks.map((link) => (
                                <a key={link.label} href={link.href} target='_blank' rel='noreferrer'>
                                    {link.label}
                                </a>
                            ))}
                        </nav>
                    )}
                </div>
            </div>
            <a className='signal-hero__scroll' href='#about'>
                <span aria-hidden='true' />
                Scroll to signal
            </a>
        </section>
    );
}

export default Landing;
