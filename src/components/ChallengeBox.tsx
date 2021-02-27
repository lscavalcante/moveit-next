import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../style/components/ChallengeBox.module.css';

export function ChallengeBox() {

    const { activeChallenge, resetChallenge, competeChallenge } = useContext(ChallengesContext);
    const { reseteCountdown  } = useContext(CountdownContext);

    function handlerChallengeSucceeded() {
        competeChallenge();
        reseteCountdown();
    }

    function handlerChallengeFailed() {
        resetChallenge();
        reseteCountdown();
    }

    return (
        <div className={styles.challengeBoxContainer}>
            { activeChallenge ? (
                <div className={styles.challengeActive}>
                    <header>{ activeChallenge.amount }</header>

                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`} />
                        <strong>Novo desafio</strong>
                        <p> { activeChallenge.description } </p>
                    </main>  

                    <footer>
                        <button
                            type="button"
                            className={styles.challengeFailedButton}
                            onClick={handlerChallengeFailed}
                        >
                            Falhei
                        </button>
                        <button
                            type="button"
                            className={styles.challengeSuccededButton}
                            onClick={handlerChallengeSucceeded}
                        >
                            Completei
                        </button>
                    </footer>
                    ˝
                </div>
            ) : (
                    <div className={styles.challengeNotActive}>
                        <strong>Finalize um ciclo para receber um desafio</strong>
                        <p>
                            <img src="icons/level-up.svg" alt="Leveu up" />
                        Avance de level completando desafios
                    </p>
                    </div>
                )}
        </div>
    );
}