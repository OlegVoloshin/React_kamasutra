import * as axios from 'axios';//значит импортируем абсолютно все из axios

const instance = axios.create({//создали обьект инстанс аксиос, чтобы повторяющиеся обьекты всегда были в нем для всех запросов
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "fd749a7f-721d-48a9-bbf5-0b1e12dab05b"
    }
})

export const usersAPI = {//
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&
        count=${pageSize}`)//подключается после базового урла
            .then(response => {
                return response.data;//отдаем только дату тк остальное не нужно компоненте
            })
    },

    follow(userId) {
        return instance.post(`follow/${userId}`)    
        .then(response => {
            return response.data;
        })
    },

    unfollow(userId) {
       return instance.delete(`follow/${userId}`)    
       .then(response => {
        return response.data;
    })        
    },    
    getProfile(userId) {
        console.warn('Obsolete method. Please profileAPI object.')
        return profileAPI.getProfile(userId)
    }
}
export const authAPI = {
    getAuth() {
        return instance.get(`auth/me`).then(response => {
            return response.data;
        })
    }
}

export const profileAPI = {//
   
    getProfile(userId) {
        return instance.get(`profile/` + userId)
            .then(response => {
                return response.data;
            })
    },
    getStatus(userId) {
        return instance.get(`profile/status/` + userId )
        .then(response => {
            return response.data;
        })
    },
    updateStatus(status) {
        return instance.put(`profile/status`, { status: status } )// отправляем обьект со св-вом статус, этого требует API документация    
        .then(response => {
            return response.data;
        })
    }
}
