import * as axios from 'axios';//значит импортируем абсолютно все из axios

const instance = axios.create({//создали обьект инстанс аксиос, чтобы повторяющиеся обьекты всегда были в нем для всех запросов
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "b0d850c7-e22f-4639-a8a1-c7d829ee7d36"
    }
})

export const usersAPI = {//
    getUsers: (currentPage, pageSize) => {
        return instance.get(`users?page=${currentPage}&
        count=${pageSize}`)//подключается после базового урла
            .then(response => {
                return response.data;//отдаем только дату тк остальное не нужно компоненте
            })
    }
}

export const authAPI = {
    getAuth: () => {
        return instance.get(`auth/me`).then(response => {
            return response.data;
        })
    }
}

export const profileAPI = {
    getProfile: (userId) => {
        return instance.get(`profile/`+ userId)
        .then(response => {
            return response.data;
        })
    }
 }