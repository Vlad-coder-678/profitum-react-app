import LargeText from '../components/LargeText';
import Number from '../components/Number';

export const worksData = [
  {
    text: {
      RU: (
        <div>
          с компаниями, товарооборот которых
          <LargeText>
            от { }
            <Number number={2} /> млн. USD до <Number number={2} /> млрд. USD
          </LargeText>
        </div>
      ),
      EN: (
        <div>
          With turnover
          <LargeText>
            from <Number number={2} /> million USD to
            <Number number={2} /> billion USD
          </LargeText>
        </div>
      ),
    },
  },
  {
    text: {
      RU: (
        <div>
          с компаниями, численность сотрудников которых варьируется
          <LargeText>
            от <Number number={30} /> до <Number number={2500} />
          </LargeText>
          сотрудников
        </div>
      ),
      EN: (
        <div>
          With number of employees
          <LargeText>
            from <Number number={30} /> to <Number number={2500} />
          </LargeText>
        </div>
      ),
    },
  },
  {
    text: {
      RU: (
        <div>
          с компаниями, бизнес которых обслуживает{' '}
          <LargeText>
            более чем <Number number={7000} /> 
          </LargeText>{' '}
          клиентов по всему миру
        </div>
      ),
      EN: (
        <div>
          With companies which covered{' '}
          <LargeText>
            more than <Number number={7000} />{' '}
          </LargeText>{' '}
          customers worldwide
        </div>
      ),
    },
  },
  {
    text: {
      RU: <LargeText>в России, странах СНГ и Европейского союза</LargeText>,
      EN: <LargeText>In Russia, CIS countries and EU</LargeText>,
    },
  },
];
