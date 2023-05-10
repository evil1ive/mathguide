import './logic.scss';


export const Logic = () => {
    
    return(
        <div className='logic-wrapper'>
            <div className='start-wrapper'><h2><span>Математическая</span> логика</h2></div>
            <div className='content-wrapper'>
                <div>
                    <h3><span>Множества</span></h3>
                    <p>
                        <span>Множество</span> - набор каких-то элементво чаще всего изображаемый с помощью кругов эйлера которые могут как входить полностью в другое множество и являтся его подмножеством или же пересекаться с каким-либо множеством
                    </p>
                    <h3><span>Тождества</span> для работы с множествами</h3>
                    <p>
                        <span>Первое</span> тождество о перемене мест слагаемых.
                    </p>
                    <p className='content-wrapper__example'>
                        <span>Формула:</span> A∧B = B∧A и A∨B = B∨A
                    </p>
                    <p>
                        <span>Второе</span> тождество о работе со скробками.
                    </p>
                    <p className='content-wrapper__example'>
                        <span>Формула:</span> A∧(B∧С) = (A∧B)∧С и A∨(B∨С) = (A∨B)∨С
                    </p>
                    <p>
                        <span>Третье</span> тождество раскрытия скобок.
                    </p>
                    <p className='content-wrapper__example'>
                        <span>Формула:</span> A∨(B∧С) = (A∨B)∧(A∨С) и A∧(B∨С) = (A∧B)∨(A∧С)
                    </p>
                    <p>
                        <span>Четвертое</span> тождество работы с пустым множеством ∅, с обратным множеством ¬ и универсальным множеством U.
                    </p>
                    <p className='content-wrapper__example'>
                        <span>Формулы для дизъюнкции:</span> A∨∅ = A, A∨¬A = U, A∨U = U
                    </p>
                    <p className='content-wrapper__example'>
                        <span>Формулы для конъюнкции:</span> A∧∅ = ∅, A∧¬A = ∅, A∧U = A
                    </p>
                    <p>
                        <span>Пятое</span> тождество работы множества с самим собой.
                    </p>
                    <p className='content-wrapper__example'>
                        <span>Формулы:</span> A∧A = A и A∨A = A
                    </p>
                    <p>
                        <span>Шестое</span> закон де Моргана.
                    </p>
                    <p className='content-wrapper__example'>
                        <span>Формулы:</span> ¬(A∧B) = ¬A∨¬B и ¬(A∨B) = ¬A∧¬B
                    </p>
                    <p>
                        <span>Седьмое</span> тождество поглощения.
                    </p>
                    <p className='content-wrapper__example'>
                        <span>Формулы:</span> (A∧B)∨A = A и (A∨B)∧A = A
                    </p>
                    <p>
                        <span>Восьмое</span> закон Порецкого.
                    </p>
                    <p className='content-wrapper__example'>
                        <span>Формулы:</span> A∨(¬A∧B) = A∨B и A∧(¬A∨B) = A∧B
                    </p>
                    <p>
                        <span>Девятое</span> тождество инволютивности.
                    </p>
                    <p className='content-wrapper__example'>
                        <span>Формулы:</span> ¬¬A = A 
                    </p>
                </div>
            </div>
            <div className='content-wrapper'>
                <div>
                    <h3><span>Задания</span> множеств</h3>
                    <p>
                        <span>Множества</span> можно задать двумя способами либо перечислением, либо характеристическим заданием.
                    </p>
                    <p className='content-wrapper__example'>
                        <span>Пример перечисления:</span> A = {"{1, 2, 3, 4, 5, 6, 7.....и т.д.}"}
                    </p>
                    <p className='content-wrapper__example'>
                        <span>Пример характеристическим заданием:</span> A = все четные числа
                    </p>
                </div>
            </div>
            <div className='content-wrapper'>
                <div>
                    <h3><span>Пока что справочник мало информативен, но он будет дополнятся в дальнейшем</span></h3>
                    <p>
                        <span>Математика</span> как уже было сказано просто огромна и обхватить ее даже на протяжении всей жизни не представляется возможным, <span>но к этому нужно стремится</span>
                    </p>
                    
                </div>
            </div>
        </div>
    )
}