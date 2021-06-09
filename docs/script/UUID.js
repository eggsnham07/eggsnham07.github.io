function UUID() {
    function gen() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString()
            .substring(1);
    };
    return gen() + gen() + '-' + gen() + '-' + gen() + '-' + gen() + '-' + gen() + gen() + gen();
}

function SuperUUID() {
    return btoa(btoa(btoa(btoa(btoa(btoa(btoa(btoa(btoa(btoa(btoa(btoa(btoa(btoa(btoa(btoa(btoa(btoa(btoa(btoa(btoa(UUID)))))))))))))))))))))
}