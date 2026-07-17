import { useMemo } from 'react';

let styleCounter = 0;

const breakpoints = { xs: 0, sm: 600, md: 960, lg: 1280, xl: 1920 };

const toKebab = (value) => value.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`);

const formatValue = (value) => (typeof value === 'number' ? `${value}px` : value);

const buildRule = (selector, styles) => {
    let base = '';
    let nested = '';

    Object.entries(styles).forEach(([property, value]) => {
        if (value === undefined || value === null) return;

        if (property.startsWith('&')) {
            nested += buildRule(property.replace('&', selector), value);
            return;
        }

        if (property.startsWith('@media')) {
            nested += `${property}{${buildRule(selector, value)}}`;
            return;
        }

        base += `${toKebab(property)}:${formatValue(value)};`;
    });

    return `${base ? `${selector}{${base}}` : ''}${nested}`;
};

const injectStyles = (styles) => {
    const classes = {};
    let css = '';

    Object.entries(styles).forEach(([key, value]) => {
        const className = `phase1-${key}-${styleCounter++}`;
        classes[key] = className;
        css += buildRule(`.${className}`, value);
    });

    if (typeof document !== 'undefined' && css) {
        const style = document.createElement('style');
        style.setAttribute('data-phase1-styles', 'true');
        style.appendChild(document.createTextNode(css));
        document.head.appendChild(style);
    }

    return classes;
};

const themeHelpers = {
    breakpoints: {
        down: (key) => `@media (max-width:${breakpoints[key] || key}px)`,
    },
};

const makeStyles = (factory) => () => useMemo(() => injectStyles(factory(themeHelpers)), [factory]);

export default makeStyles;
