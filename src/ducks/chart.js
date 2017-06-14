
const CREATE_CHART = 'CREATE_CHART';
const SET_ACTIVE_CHART_INDEX = 'SET_ACTIVE_CHART_INDEX';
const ADD_DATASET = 'ADD_DATASET';

const initialState = {
    activeChartIndex: 0,
    charts: [
        {
            labels: [ "Red", "Blue", "Yellow", "Green", "Purple", "Orange" ], 
            name: "Example Chart", 
            datasets: [
                {
                label: "My First dataset", 
                data: [65, 59, 90, 81, 56, 55, 40]
                },
                {
                label: "My Second dataset",
                data: [28, 48, 40, 19, 96, 27, 100]
                }
            ]
        }
    ]
}

export function creatChart(labels, name){
    return {
        type: CREATE_CHART,
        payload: { 
            labels, 
            name, 
            datasets: [] 
        }
    }
}

export function setActiveChartIndex(index){
    return {
        type: SET_ACTIVE_CHART_INDEX,
        payload: index
    }
}

export function addDataset(dataset){
    return {
        type: ADD_DATASET,
        payload: dataset
    }
}


//reducer function
function chart(state = initialState, action){
    switch(action.type){
        case CREATE_CHART:
            return {
                activeChartIndex: 0,
                charts: [action.payload, ...state.charts]
            } 
        case SET_ACTIVE_CHART_INDEX:
            return {
                activeChartIndex: action.payload,
                charts: state.charts
            } 
        case ADD_DATASET:
            const { activeChartIndex, charts } = state;
            const activeChart = charts[ activeChartIndex ];
            return {
                activeChartIndex,
                charts: [
                    ...charts.slice( 0, activeChartIndex ), 
                    Object.assign({}, activeChart, { datasets: [ ...activeChart.datasets, action.payload ] }), 
                    ...charts.slice( activeChartIndex + 1, charts.length )
                ]
            }
        default: 
            return state;
    }
}

export default chart;
