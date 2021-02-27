import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../style/components/Profile.module.css';

export function Profile() {

    const { level } = useContext(ChallengesContext)

    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/lscavalcante.png" alt="Lucas Cavalcante" />
            <div>
                <strong>Lucas Cavalcante</strong>
                <p>
                    <img src="icons/level.svg" alt="level"></img>
                    Level {level}
                </p>
            </div>
        </div>
    );
}