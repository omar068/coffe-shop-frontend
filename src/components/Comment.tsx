export default function Comment({ comment, user }: { comment: string; user: string }) {
    return (
        <div className="mb-4">
            <div className="flex items-center mb-2">
                <img
                    className="w-[38px] h-[38px] rounded-full"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT71CwX8tJZe0UzmB4gWJWfYlW-ZNhekfPbCw&s"
                    alt="Image-avatar"
                />
                <div className="ml-2">{user}</div>
                <div className="ml-auto text-xs text-[#E41AD6]">Responder</div>
            </div>
            <div className="text-sm">{comment}</div>
        </div>
    )
}