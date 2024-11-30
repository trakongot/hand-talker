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
        label: "Giới thiệu về HandTalk",
        subLabel: "Tìm hiểu về HandTalk và các tính năng của nó.",
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
    label: "Phân Tích & Dịch Ngôn Ngữ Ký Hiệu",
    children: [
      {
        label: "Tải video/hình ảnh lên",
        subLabel: "Tải video hoặc hình ảnh để phân tích ngôn ngữ ký hiệu.",
        href: "#",
      },
      {
        label: "Kết quả phân tích",
        subLabel:
          "Xem các kết quả phân tích ngôn ngữ ký hiệu từ video hoặc hình ảnh.",
        href: "#",
      },
      {
        label: "Dịch ngôn ngữ ký hiệu",
        subLabel: "Dịch ngôn ngữ ký hiệu thành văn bản hoặc âm thanh.",
        href: "#",
      },
      {
        label: "Phát hiện ngôn ngữ ký hiệu",
        subLabel: "Phát hiện ngôn ngữ ký hiệu trong video hoặc hình ảnh.",
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
