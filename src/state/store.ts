import {reactive, readonly} from "vue";

const state = reactive({
    foo: "bar",
    count: 0
});

export async function  setState(){
    // axios
    return {foo: "Xam", count: 200}
}

export default {
    state: readonly(state),

    SET_STATE(data: any){
        state.foo = data.foo;
        state.count = data.count;
    },

    UPDATE_COUNT(value: number) {
        state.count = value;
    },

    UPDATE_FOO(value: string) {
        state.foo = value;
    }
}