

function Peoplebar() {

    return (
        <div className="container basis-1/4">
            <div class="w-4/5 h-40 bg-white rounded-lg overflow-hidden shadow-md">
                <div class="p-4">
                    {/* <img class="w-16 h-16 rounded-full mx-auto" src="https://placekitten.com/200/200" alt="User Avatar"> */}
                </div>

                <div class="text-center p-4">
                    <h2 class="text-xl font-semibold text-gray-800">John Doe</h2>
                    <p class="text-gray-600">Web Developer</p>
                </div>

                <div class="p-4">
                    <p class="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>
        </div>
    )
}

export default Peoplebar;