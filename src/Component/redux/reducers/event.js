const initialState = {
    event: [],
    eventlimit: [],
    status: '',
    statusCard: '',
    isLoading: false,
    pagination: [],
}

const event = (state = initialState, action) => {
    switch (action.type) {
        case 'POST_EVENT_PENDING':
            return {
                ...state,
                isLoading: true
            }
        case 'POST_EVENT_REJECTED':
            return {
                ...state,
                isLoading: false
            }

        case 'POST_EVENT_FULFILLED':
            return {
                ...state,
                isLoading: false,
                event: action.payload.data.result,
                statusCard: action.payload.status
            }
        case 'GET_EVENT_PENDING':
            return {
                ...state,
                isLoading: true
            }
        case 'GET_EVENT_REJECTED':
            return {
                ...state,
                isLoading: false
            }

        case 'GET_EVENT_FULFILLED':
            return {
                ...state,
                isLoading: false,
                event: action.payload.data.result,
                status: action.payload.status
            }
        case 'PAGINATION_FULFILLED':
            return {
                ...state,
                event: action.payload.data.result,
                pagination: action.payload.data.totalPages
            }
        case 'GET_EVENTLIMIT_PENDING':
            return {
                ...state,
                isLoading: true
            }
        case 'GET_EVENTLIMIT_REJECTED':
            return {
                ...state,
                isLoading: false
            }
        case 'GET_EVENTLIMIT_FULFILLED':
            return {
                ...state,
                isLoading: false,
                eventlimit: action.payload.data.result,
                pagination: action.payload.data.totalPages
            }
        case 'GET_EVENTSEARCH_PENDING':
            return {
                ...state,
                isLoading: true
            }
        case 'GET_EVENTSEARCH_REJECTED':
            return {
                ...state,
                isLoading: false
            }

        case 'GET_EVENTSEARCH_FULFILLED':
            return {
                ...state,
                isLoading: false,
                event: action.payload.data.result,
                status: action.payload.status,
                eventlimit: action.payload.data.result,
                pagination: action.payload.data.totalPages
            }
        default:
            return state;
    }
}

export default event