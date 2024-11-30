export interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

export const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Trang Chủ",
    children: [
      {
        label: "Giới thiệu",
        subLabel: "Tìm hiểu về HandTalk và các tính năng.",
        href: "#",
      },
      {
        label: "Cập nhật mới nhất",
        subLabel: "Các thông tin và cập nhật mới nhất về hệ thống.",
        href: "#",
      },
    ],
  },
  {
    label: "Dịch Ngôn Ngữ Ký Hiệu",
    children: [
      {
        label: "Dịch Ký Hiệu từ Video",
        subLabel: "Tải video hoặc hình ảnh để chuyển thành văn bản dễ hiểu.",
        href: "#",
      },
      {
        label: "Chuyển Văn Bản thành Ký Hiệu",
        subLabel:
          "Xem kết quả phân tích và chuyển đổi văn bản thành ngôn ngữ ký hiệu.",
        href: "#",
      },
    ],
  },
  {
    label: "Hỗ Trợ & Thông Tin",
    children: [
      {
        label: "Hướng dẫn sử dụng",
        subLabel:
          "Hướng dẫn chi tiết về cách sử dụng các tính năng của hệ thống.",
        href: "#",
      },
      {
        label: "FAQ",
        subLabel: "Danh sách các câu hỏi thường gặp và câu trả lời.",
        href: "#",
      },
      {
        label: "Feedback và đánh giá",
        subLabel: "Chia sẻ phản hồi và đánh giá trải nghiệm sử dụng hệ thống.",
        href: "#",
      },
      {
        label: "Chính sách bảo mật",
        subLabel:
          "Thông tin về chính sách bảo mật và cách chúng tôi bảo vệ dữ liệu người dùng.",
        href: "#",
      },
      {
        label: "Điều khoản sử dụng",
        subLabel: "Các điều khoản và điều kiện sử dụng dịch vụ của hệ thống.",
        href: "#",
      },
    ],
  },
  {
    label: "Donate =-=",
    href: "#",
  },
];
