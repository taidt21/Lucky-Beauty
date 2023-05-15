import React from 'react';
import './chartServices.css';
const ChartServices = () => {
    const Services = [
        {
            name:'Dịch vụ 1',
            value:'65,000.000',
            color:'#FFC700',
            bgColor:'#FFF8DD'
        },
        {
            name:'Dịch vụ 2',
            value:'65,000.000',
            color:'#7C3367',
            bgColor:'#F2EBF0'
        },
        {
            name:'Dịch vụ 3',
            value:'65,000.000',
            color:'#009EF7',
            bgColor:'#F1FAFF'
        },
        {
            name:'Dịch vụ 4',
            value:'65,000.000',
            color:'#F1416C',
            bgColor:'#FFF5F8'
        },
        {
            name:'Dịch vụ 5',
            value:'65,000.000',
            color:'#50CD89',
            bgColor:'#E8FFF3'
        },
    ];
    const ServicesElement = Services.map((Service) =>(
        <div className='service-item' key={Service.name.replace(/\s/g, '')}>
            <div className='service-row-1'>
                <div className='service-name'>{Service.name}</div>
                <div className='service-value' style={{color:Service.color}}>{Service.value}</div>
            </div>
            <div className='service-progress' style={{background:Service.bgColor}}>
                <div className='service-progressBar' style={{background:Service.color}}></div>
            </div>
        </div>
    ))
    return (
        <div className='services'>
            {ServicesElement}
        </div>
    );
};

export default ChartServices;