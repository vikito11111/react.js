import { useState } from "react";

export default function TailwindForm(props) {
    const [values, setValues] = useState({
        email: '',
        password: '',
    });

    function changeHandler(e) {
        setValues(oldValues => ({
            ...oldValues,
            [e.target.name]: e.target.value,
        }));
    };

    function formSubmitHandler(e) {
        e.preventDefault();

        console.log('Form Submitted');
    }

    return (
        <form
            className="space-y-6"
            onSubmit={formSubmitHandler}
            ref={props.formRef}
        >
            <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                    Email address
                </label>
                <div className="mt-2">
                    <input
                        id="email"
                        name="email"
                        type="email"
                        value={values.email}
                        onChange={changeHandler}
                        required
                        autoComplete="email"
                        className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
            </div>

            <div>
                <div className="flex items-center justify-between">
                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                        Password
                    </label>
                    <div className="text-sm">
                        <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                            Forgot password?
                        </a>
                    </div>
                </div>
                <div className="mt-2">
                    <input
                        id="password"
                        name="password"
                        type="password"
                        value={values.password}
                        onChange={changeHandler}
                        required
                        autoComplete="current-password"
                        className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
            </div>
        </form>
    );
}