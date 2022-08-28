const storage = window.localStorage

function setItem(key: string, value: any) {
    storage.setItem(key, JSON.stringify(value))
}

function getItem(key: string) {
    const value = storage.getItem(key)
    let result
    if (value) {
        try {
            result = JSON.parse(value)
        } catch {
            result = value
        }
    }
    return result
}

function removeItem(key: string) {
    storage.removeItem(key)
}

export default { setItem, getItem, removeItem }
