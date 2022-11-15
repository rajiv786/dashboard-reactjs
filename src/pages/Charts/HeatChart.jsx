import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject,ColumnSeries, Legend, Category} from'@syncfusion/ej2-react-charts';
import { HeatChat,HeatChatx, heatchaty } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';
import { ChartsHeader } from '../../components';
const HeatChat1 = () => {
    const { currentMode } = useStateContext();
    return ( 
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <ChartsHeader category="Heat Chart " title="Market Analysis-Hiring" />
      <ChartComponent id='charts' primaryXAxis={HeatChatx} primaryYAxis={heatchaty} dataSource={HeatChat} title='Heat Chat using React' background={currentMode === 'Dark' ? '#33373E' : '#fff'}>
        <Inject services={[ColumnSeries, Legend, Category]}/>
        <SeriesCollectionDirective>
          <SeriesDirective dataSource={HeatChat} name="USA" xName="x" yName="y" type="Column">
          </SeriesDirective>
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
    );
};
export default HeatChat1;