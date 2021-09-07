import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
    {
        title: 'What we\'re doing',
        Svg: require('../../static/img/information.svg').default,
        description: (
            <>

                At Build the Earth Germany we're doing exactly, what our name says: We're building the world – 1:1 in the computer-game "Minecraft".<br/>
                <br/>
                With nearly 800 builders and over 16.500 members on our Discord Server, we're one of the largest Regional Build Teams in the international Build the Earth project.
                <br/><br/>
                <a href="https://bte-germany.de/join">Join our Team</a>
            </>
        ),
    },
    {
        title: 'Join our Discord',
        Svg: require('../../static/img/messaging.svg').default,
        description: (
            <>

                We use Discord to organize our Build Team.
                Join the over 16.500 members other members on our Discord, to help us build Germany 1:1 in
                Minecraft!<br/><br/>
                <a href="https://discord.gg/HJsB5eWVkn">Join the Discord</a>
            </>
        ),
    },
    {
        title: 'Get information from the docs',
        Svg: require('../../static/img/files.svg').default,
        description: (
            <>

                If you have any question, simply search through our docs and maybe find your answer!
            </>
        ),
    }
];

function Feature({Svg, title, description}) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                <Svg className={styles.featureSvg} alt={title}/>
            </div>
            <div className="text--center padding-horiz--md">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures() {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
