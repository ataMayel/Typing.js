class Typing {

    constructor(element, options) {
        this.element = document.querySelector(element);
        this.data = options.data || '';
        this.speed = options.speed || 60;
        this.delay = options.delay || 0;
        this.back = options.back;
        this.repeat = options.repeat;
    }

    async start() {
        this.set('')
        do {
            await this.wait(this.delay)
            await this.type(this.data)
            if (this.back) {
                await this.wait(this.back.delay)
                await this.Back()
            }
        } while (this.repeat);
    }
    
    async type(data) {
        this.set('')
        for (let i = 0; i < data.length; i++) {
            await this.wait(this.speed)
            this.add(data[i])
        }
    }

    async Back() {
        do {
            await this.wait(this.back.speed)
            this.set(this.get().slice(0, -1))
        } while (this.get().length);
    }

    get() { return this.element.innerHTML }

    set(data) { this.element.innerHTML = data }

    add(char) { this.set(this.get() + char) }

    async wait(time) {
        await new Promise(resolve => setTimeout(resolve, time))
    }
}