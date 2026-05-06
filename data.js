export const gameData = {
    // 1. Danh sách 30 chủ đề
    topics: [
        "Family", "Food", "School", "Jobs", "Travel", "Weather", 
        "Body", "Animals", "Tech", "Colors", "Sports", "Music", 
        "Nature", "City", "Health", "Clothing", "Time", "Space", 
        "Emotion", "Actions", "Shapes", "Kitchen", "Office", "Transport", 
        "Numbers", "Daily", "Hobbies", "Fruits", "Buildings", "Furniture"
    ],

    // 2. Dữ liệu Từ vựng (Cho game Nối từ & Viên thuốc)
    vocabulary: {
        "Family": [{en: "Father", vi: "Cha"}, {en: "Mother", vi: "Mẹ"}, {en: "Sister", vi: "Chị"}, {en: "Brother", vi: "Anh"}],
        "Food": [{en: "Bread", vi: "Bánh mì"}, {en: "Rice", vi: "Cơm"}, {en: "Pizza", vi: "Pizza"}, {en: "Soup", vi: "Súp"}],
        "School": [{en: "Teacher", vi: "Giáo viên"}, {en: "Student", vi: "Học sinh"}, {en: "Book", vi: "Sách"}, {en: "Pen", vi: "Bút"}],
        "Jobs": [{en: "Doctor", vi: "Bác sĩ"}, {en: "Farmer", vi: "Nông dân"}, {en: "Singer", vi: "Ca sĩ"}, {en: "Nurse", vi: "Y tá"}],
        "Travel": [{en: "Airport", vi: "Sân bay"}, {en: "Hotel", vi: "Khách sạn"}, {en: "Ticket", vi: "Vé"}, {en: "Map", vi: "Bản đồ"}],
        "Weather": [{en: "Sunny", vi: "Nắng"}, {en: "Rainy", vi: "Mưa"}, {en: "Windy", vi: "Gió"}, {en: "Storm", vi: "Bão"}],
        "Body": [{en: "Head", vi: "Đầu"}, {en: "Eye", vi: "Mắt"}, {en: "Hand", vi: "Tay"}, {en: "Leg", vi: "Chân"}],
        "Animals": [{en: "Lion", vi: "Sư tử"}, {en: "Tiger", vi: "Hổ"}, {en: "Dog", vi: "Chó"}, {en: "Cat", vi: "Mèo"}],
        "Tech": [{en: "Computer", vi: "Máy tính"}, {en: "Mouse", vi: "Chuột"}, {en: "Phone", vi: "Điện thoại"}, {en: "Screen", vi: "Màn hình"}],
        "Colors": [{en: "Red", vi: "Đỏ"}, {en: "Blue", vi: "Xanh dương"}, {en: "Green", vi: "Xanh lá"}, {en: "Black", vi: "Đen"}],
        "Sports": [{en: "Football", vi: "Bóng đá"}, {en: "Tennis", vi: "Tennis"}, {en: "Swim", vi: "Bơi"}, {en: "Run", vi: "Chạy"}],
        "Music": [{en: "Piano", vi: "Piano"}, {en: "Guitar", vi: "Guitar"}, {en: "Song", vi: "Bài hát"}, {en: "Drum", vi: "Trống"}],
        "Nature": [{en: "Mountain", vi: "Núi"}, {en: "River", vi: "Sông"}, {en: "Flower", vi: "Hoa"}, {en: "Tree", vi: "Cây"}],
        "City": [{en: "Street", vi: "Đường"}, {en: "Park", vi: "Công viên"}, {en: "Bridge", vi: "Cầu"}, {en: "Market", vi: "Chợ"}],
        "Health": [{en: "Medicine", vi: "Thuốc"}, {en: "Pain", vi: "Đau"}, {en: "Sick", vi: "Ốm"}, {en: "Fit", vi: "Khỏe mạnh"}],
        "Clothing": [{en: "Shirt", vi: "Áo"}, {en: "Pants", vi: "Quần"}, {en: "Hat", vi: "Mũ"}, {en: "Shoes", vi: "Giày"}],
        "Time": [{en: "Hour", vi: "Giờ"}, {en: "Minute", vi: "Phút"}, {en: "Second", vi: "Giây"}, {en: "Day", vi: "Ngày"}],
        "Space": [{en: "Sun", vi: "Mặt trời"}, {en: "Moon", vi: "Mặt trăng"}, {en: "Star", vi: "Sao"}, {en: "Earth", vi: "Trái đất"}],
        "Emotion": [{en: "Happy", vi: "Hạnh phúc"}, {en: "Sad", vi: "Buồn"}, {en: "Angry", vi: "Giận"}, {en: "Scared", vi: "Sợ"}],
        "Actions": [{en: "Eat", vi: "Ăn"}, {en: "Drink", vi: "Uống"}, {en: "Sleep", vi: "Ngủ"}, {en: "Walk", vi: "Đi bộ"}],
        "Shapes": [{en: "Circle", vi: "Tròn"}, {en: "Square", vi: "Vuông"}, {en: "Star", vi: "Sao"}, {en: "Oval", vi: "Bầu dục"}],
        "Kitchen": [{en: "Knife", vi: "Dao"}, {en: "Spoon", vi: "Thìa"}, {en: "Plate", vi: "Đĩa"}, {en: "Pot", vi: "Nồi"}],
        "Office": [{en: "Desk", vi: "Bàn"}, {en: "Paper", vi: "Giấy"}, {en: "File", vi: "Hồ sơ"}, {en: "Boss", vi: "Sếp"}],
        "Transport": [{en: "Car", vi: "Ô tô"}, {en: "Bus", vi: "Xe buýt"}, {en: "Bike", vi: "Xe đạp"}, {en: "Train", vi: "Tàu hỏa"}],
        "Numbers": [{en: "One", vi: "Một"}, {en: "Ten", vi: "Mười"}, {en: "Hundred", vi: "Trăm"}, {en: "First", vi: "Thứ nhất"}],
        "Daily": [{en: "Morning", vi: "Buổi sáng"}, {en: "Night", vi: "Buổi đêm"}, {en: "Lunch", vi: "Bữa trưa"}, {en: "Work", vi: "Làm việc"}],
        "Hobbies": [{en: "Game", vi: "Trò chơi"}, {en: "Movie", vi: "Phim"}, {en: "Chess", vi: "Cờ vua"}, {en: "Dance", vi: "Nhảy"}],
        "Fruits": [{en: "Orange", vi: "Cam"}, {en: "Banana", vi: "Chuối"}, {en: "Mango", vi: "Xoài"}, {en: "Grape", vi: "Nho"}],
        "Buildings": [{en: "House", vi: "Nhà"}, {en: "School", vi: "Trường"}, {en: "Bank", vi: "Ngân hàng"}, {en: "Church", vi: "Nhà thờ"}],
        "Furniture": [{en: "Chair", vi: "Ghế"}, {en: "Bed", vi: "Giường"}, {en: "Table", vi: "Bàn"}, {en: "Lamp", vi: "Đèn"}]
    },

    // 3. Dữ liệu Câu (Cho game Nghe & Ghép câu)
    sentences: {
        "Family": [
            { en: "Who is this?", vi: "Đây là ai?", words: ["Who", "is", "this?"] },
            { en: "How many people are there in your family?", vi: "Gia đình bạn có bao nhiêu người?", words: ["How", "many", "people", "are", "there", "in", "your", "family?"] }
        ],
        "School": [
            { en: "What grade are you in?", vi: "Bạn học lớp mấy?", words: ["What", "grade", "are", "you", "in?"] },
            { en: "I go to school by bus.", vi: "Tôi đi học bằng xe buýt.", words: ["I", "go", "to", "school", "by", "bus."] }
        ],
        "Daily": [
            { en: "What time do you get up?", vi: "Bạn thức dậy lúc mấy giờ?", words: ["What", "time", "do", "you", "get", "up?"] },
            { en: "Where are you from?", vi: "Bạn đến từ đâu?", words: ["Where", "are", "you", "from?"] }
        ]
        // Lưu ý: Bạn có thể thêm câu tương tự cho các chủ đề khác dựa trên cấu trúc trên
    }
};
