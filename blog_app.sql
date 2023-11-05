-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Nov 05, 2023 at 06:46 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `blog_app`
--

-- --------------------------------------------------------

--
-- Table structure for table `Blog`
--

CREATE TABLE `Blog` (
  `id` int(10) UNSIGNED NOT NULL,
  `title` varchar(200) NOT NULL,
  `details` varchar(2000) NOT NULL,
  `image` varchar(500) NOT NULL,
  `category` varchar(50) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `userId` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `Blog`
--

INSERT INTO `Blog` (`id`, `title`, `details`, `image`, `category`, `createdAt`, `updatedAt`, `userId`) VALUES
(1, 'Best iPad Management Software:', 'In today’s digital age, iPads have become indispensable tools for individuals and organizations.\n\nWhether you’re using them for personal or business purposes, efficient management of these devices is crucial to ensure their optimal performance.\n\nThis is where iPad management software steps in to simplify the task. In this article, we will explore the best iPad management software, its significance, key features, and the best options available.\nThe Importance of iPad Management Software\n\nManaging multiple iPads without dedicated software can be a daunting task. iPad management software is designed to streamline the entire process, making it easier to control, secure, and optimize these devices.', 'https://banglaph.com/wp-content/uploads/2023/10/Best-Accounting-Software-for-Medium-Sized-Businesses-390x220.jpg', 'ICT Blog', '2023-11-04 11:35:25', '2023-11-04 11:35:25', 1),
(2, 'Teletalk minute recharge offer 2023', 'টেলিটক মিনিট বান্ডিল অফার ২০২৩ - আপনার মোবাইল ফোনে টেলিটক সিমে আরও আকর্ষণীয় মিনিট অফার পাবেন এখন কম রেটে!\nআমরা আজ এই পোস্ট লেখেছি আপনার জন্য কারণ মোবাইলে প্রিয়জনের সাথে কথা বলা শেষ না হওয়ার সুযোগ দেয়ার জন্য! স্বাগতম প্রিয় পাঠকবৃন্দ, টেলিটক মিনিট অফার ২০২৩\nমোবাইল ফোন বিশ্বের একটি অভিন্ন অংশ হিসেবে প্রতিদিন সারা বিশ্বের লাখ লাখ মানুষের জীবন সহজ করেছে। আজকের সময়ে মানুষ ব্যস্ত ও প্রয়োজনীয় তথ্যে ব্যক্তিগতভাবে যুক্ত থাকতে চায়, এবং মোবাইল ফোন এই প্রয়োজনকে পূরণ করার জন্য সবচেয়ে সহায়ক সাধন হিসেবে স্বীকৃতি পেয়েছে। আর এই সুবিধাকে দিগুণ বাড়িয়ে দেওয়ার জন্য ,টেলিটক মোবাইল অপারেটর, আপনার যোগাযোগের ক্ষেত্রে মোবাইলে দীর্ঘ সময় কথাবলার জন্য আপনার জন্য নিয়ে এসেছে নতুন সাশ্রয়ী অফার \"টেলিটক মিনিট অফার ২০২৩\"।', 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEizQ7z_4ipxLrYH0rTgl7vAD-VWJgA8v6lbd5JqbNsSC7u1oxgmcN-EJ9N2MXtj_UIifwAvnIs-dLmY_71qQRCxkSqOh5jyhICj7SrOo9Y72FA167fMvXeFBwXp3M1jG8xs2xmUBiP6Cj-np0wqxA7lNYajvbLCbtWfP17B5PQIKxF0oACam6SsYsQL1WPK/w400-h236/%E0%A6%9F%E0%A7%87%E0%A6%B2%E0%A6%BF%E0%A6%9F%E0%A6%95%20%E0%A6%AE%E0%A6%BF%E0%A6%A8%E0%A6%BF%E0%A6%9F%20%E0%A6%85%E0%A6%AB%E0%A6%BE%E0%A6%B0%20%E0%A7%A8%E0%A7%A6%E0%A7%A8%E0%A7%A9.jpg', 'Internet Offer', '2023-11-04 11:45:31', '2023-11-04 11:45:31', 1),
(5, 'Realme C35 Market Price 2023', 'আজ এই নিবন্ধে, আমরা জনপ্রিয় স্মার্টফোন রিয়েলমি সি 35 এর সম্পর্কে বিভিন্ন বিষয়, সম্পূর্ণ স্পেসিফিকেশন এবং বিভিন্ন জিজ্ঞাসিত প্রশ্নাবলী সমন্বিত Realme C35 বাজার মূল্যের উপর একটি বিস্তৃত আলোচনা করব। \n\nRealme C35 বাজার মূল্য সম্পর্কে আমাদের আলোচনা পোষ্টে স্বাগতম। আপনি যদি ভালো মানের কোয়ালিটি সম্পূর্ণ একটি সাশ্রয়ী মূল্যের স্মার্টফোন খুঁজেন, তাহলে আমার মতে আপনার জন্য Realme C35 স্মার্টফোনটি । আজ এই নিবন্ধে আপনাকে এর মূল্য, স্পেসিফিকেশন, বৈশিষ্ট্য এবং কেন এটি কম বাজেটের মধ্যে গ্রাহকের কাছে জনপ্রিয় পছন্দ হয়ে উঠেছে সে সম্পর্কে আপনার যা জানা দরকার তার সব কিছুর জানাবো ইনশাআল্লাহ্‌ । ', 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhY4JMDsgIFrKdQ45I1Mt_pf0PBF9TO3T1_SfC44GrRYuTVa64XUgiRx6HxpwJIbCtsxnu0bjvuBOuIZ4Nkth_useXxIlFhhS8ma_c7KqKG-SsvEKGlHfGwMxPbjjPncLZWaH6xjl--T3whLQTAk8dZ3CaFfdXQV4gnqt4t970mHL2NBZE5ex3DFNk00CwJ/w400-h391/%E0%A6%B0%E0%A6%BF%E0%A6%AF%E0%A6%BC%E0%A7%87%E0%A6%B2%E0%A6%AE%E0%A6%BF%20%E0%A6%B8%E0%A6%BF%2035%20%E0%A6%AE%E0%A6%BE%E0%A6%B0%E0%A7%8D%E0%A6%95%E0%A7%87%E0%A6%9F%20%E0%A6%AA%E0%A7%8D%E0%A6%B0%E0%A6%BE%E0%A6%87%E0%A6%B8.webp', 'Mobile', '2023-11-04 12:43:56', '2023-11-04 12:43:56', 1),
(6, '*১০ হাজার টাকার মধ্যে শাওমি মোবাইল ২০২২', '*১০ হাজার টাকার মধ্যে শাওমি মোবাইল ২০২২\n\n১০০০০ টাকার মধ্যে সেরা মোবাইল বাংলাদেশের  Xiaomi Redmi Go, Xiaomi Redmi 9A, Xiaomi Redmi 8A, Xiaomi Redmi 7A, Xiaomi Redmi 6A এই মোবাইল গুলি আপনারা পাবেন  ১০০০০ টাকার নিচে।\n\nআজকের এই বর্তমান যুগ হচ্ছে মোবাই ফোনের যুগ। আমরা আজকের এই যুগে মোবাইল বা স্মার্টফোন ছাড়া চলাফেরা আমাদের জন্য অনেক কঠিন । তাই আমরা সব সময় চাই আমাদের বাজেটের মধ্য ভালো ফিচার সম্বলিত একটি ফোন হাতে পেতে। আমরা লক্ষ্য করেছি মোবাইল কম্পানি গুলি বাজারে টিকে থাকার জন্য কম দামের অনেক ভালো মানের মোবাইল এনেছেন সেই সব ভালো মানের মোবাইলের মধ্য ১০০০০ দশ হাজার টাকার মধ্য শাওমির কয়েকটি মোবাইল নিয়ে এসেছে আমরা আপনাদের সাথে সেই সব মোবাইল নিয়ে আলোচনা করবো ইনশাআল্লাহ্।', 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhVYfheCokS5CBqKoSYEIBg4igDWQj08iHWCJtEdIURLDMy0pdZMhowIz3v9Xt8XKvnCiH88stKAn5_6Lo9jzGR5YFQM-uQ5y8XhwRhItj38N6SzBeGfT0EQa-3Dp3xDoZ_FQRqNwFZY3_vd7pe1WZIzQq63S1e3qndS3JE_J0zhYiQVG2jx4CE6ApksQ/w320-h281/Picsart_22-08-07_08-19-14-559.jpg', 'Mobile', '2023-11-04 12:46:03', '2023-11-04 12:46:03', 1),
(14, '১২০০০ টাকার মধ্যে মোবাইল ২০২৩', 'আজকের বর্তমান ডিজিটাল যুগে মোবাইল ফোন আমাদের জীবনের একটি বিশেষ অংশ হয়ে উঠেছে। মোবাইল দিয়ে শুধুমাত্র আমাদের প্রিয়জন বন্ধু বান্ধবদের সাথে কথা বলার মধ্যে সীমাবদ্ধ নেই বরং এই ডিজিটাল জগতে প্রবেশ করার জন্য এক অন্য রকম মাধ্যম হয়ে উঠেছে। স্যামসাং,শাওমি, রিয়েলমি, অপপো,ভিভো সহ শীর্ষ স্মার্টফোন প্রস্তুতকারকদের মধ্যে ইতি মধ্যে বিভিন্ন ফিচার দাম ডিজাইন নিয়ে প্রতিযোগিতা সৃষ্টি হয়েছে। আজকের এই নিবন্ধে, আমরা ১২০০০ টাকা বাজেটের মধ্যে বিভিন্ন ধরনের ফিচার এবং আর্কষণ ডিজাইনের স্যামসাং,শাওমি, রিয়েলমি, অপপো,ভিভো এর মোবাইল ফোন নিয়ে আলোচনা করব। ', 'https://waltonbd.com/image/catalog/home-page/half-block/nexg-n6-block.jpg', 'mobile', '2023-11-04 17:27:37', '2023-11-04 17:27:37', 2),
(15, 'As you all may already know, one of the cool new things', 'As you all may already know, one of the cool new things introduced in WWDC 2022 was Swift Charts, a framework to create charts with SwiftUI. To learn more about the Swift Charts’ potential, let’s go on a thrilling adventure to replace the chart in WooCommerce iOS with this ✨✨ shiny new framework ✨✨.\n\nTo get started, here’s what the chart currently looks like in WooCommerce iOS. We’d want to build something similar using Swift Charts:\nAs you all may already know, one of the cool new things introduced in WWDC 2022 was Swift Charts, a framework to create charts with SwiftUI. To learn more about the Swift Charts’ potential, let’s go on a thrilling adventure to replace the chart in WooCommerce iOS with this ✨✨ shiny new framework ✨✨.\n\nTo get started, here’s what the chart currently looks like in WooCommerce iOS. We’d want to build something similar using Swift Charts:', 'https://mobiledotblog.files.wordpress.com/2022/07/image.png', 'Statistics', '2023-11-04 23:33:28', '2023-11-04 23:33:28', 3),
(16, 'This looks so horribly incorrect! The revenues', 'This looks so horribly incorrect! The revenues aren’t displayed in the correct order, which makes the chart wrong. The reason was probably due to the data for the chart being Strings, which is a nominal data type, making Swift infers the chart differently from quantitative and temporal types (numbers and dates). I had to revert this change and look for another solution.\n\nAfter watching the aforementioned WWDC video again, I learned that the axes can be configured with AxisMarks through chartXAxis and chartYAxis view modifiers on the Chart. The AxisMarks comes with a constructor that lets us define how to stride the data, and then define the content for each mark, which can be any or all of these: AxisTick, AxisGridLine and AxisValueLabel. ', 'https://mobiledotblog.files.wordpress.com/2022/07/image-1.png', 'Statistics', '2023-11-04 23:34:30', '2023-11-04 23:34:30', 3),
(17, 'Samsung Galaxy Z Fold4 5G highlight', 'Samsung Galaxy Z Fold4 5G will be launched in July 2023. The Galaxy Z Fold4 launched with a model number unknown. Firstly, Its dimensional measure is Unfolded: 154.9 x 129.9 x 6.1 mm Folded: 154.9 x 67.1 x 13.4 mm and the weight is 253 grams. Secondly, the display of Galaxy Z Fold4 5G is a 7.6-inch Foldable Dynamic AMOLED 2X panel with 1812 x 2176 pixels resolution. The display is protected from the unknown. Thirdly and most importantly, It is powered by the Qualcomm SM8550-AC Snapdragon 8 Gen 2 (4 nm) and runs with Android 13. Moreover, it has an Octa-core (1×3.36 GHz Cortex-X3 & 2×2.8 GHz Cortex-A715 & 2×2.8 GHz Cortex-A710 & 3×2.0 GHz Cortex-A510) CPU.\n\nSamsung Galaxy Z Fold4 5G phone has a three-camera setup on the back. This formation consists of a 50MP wide, 10MP telephoto, and 12MP ultrawide camera. It has a 4MP and 10MP selfie camera inside the notch of the display. The video recording capability is 8K@24fps, 4K@60fps, 1080p@60/240fps (gyro-EIS), 720p@960fps (gyro-EIS), HDR10+. According to its RAM and ROM, It has three (12GB/256/512GB/1TB) variants. On the other hand, it can support up to microSDXC using a dedicated slot. Certainly, Galaxy Z Fold4 5G has a 4400mAh battery with 25W fast charging. It has a dual nano-SIM card slot. That is to say, Galaxy Z Fold4 5G is 2G/3G/4G/5G supportable. The fingerprint sensor is side-mounted.', 'https://www.mobiledokan.co/wp-content/uploads/2022/08/Samsung-Galaxy-Z-Fold5.jpg', 'Mobile Information', '2023-11-04 23:40:31', '2023-11-04 23:40:31', 6),
(18, 'Vivo S18 Pro highlight', 'Vivo S18 Pro will be launched in November 2023. Firstly, the display of the S18 Pro is a 6.78-inch AMOLED panel with 1260 x 2800 pixels resolution. Secondly, the display is protected with unknown glass. The S18 Pro phone has a three-camera setup on the back. This formation consists of a 50MP wide, 8MP telephoto, and 8MP ultrawide camera. It has a 50MP selfie camera inside the punch hole of the display. On the other hand, it can support up to microSDXC and it has a dual nano-SIM card slot.\nVivo S18 Pro will be launched in November 2023. Firstly, the display of the S18 Pro is a 6.78-inch AMOLED panel with 1260 x 2800 pixels resolution. Secondly, the display is protected with unknown glass. The S18 Pro phone has a three-camera setup on the back. This formation consists of a 50MP wide, 8MP telephoto, and 8MP ultrawide camera. It has a 50MP selfie camera inside the punch hole of the display. On the other hand, it can support up to microSDXC and it has a dual nano-SIM card slot.', 'https://www.mobiledokan.co/wp-content/uploads/2023/03/Vivo-S17-Pro-Black.jpg', 'Mobile Information', '2023-11-04 23:41:23', '2023-11-04 23:41:23', 6);

-- --------------------------------------------------------

--
-- Table structure for table `Contact`
--

CREATE TABLE `Contact` (
  `id` int(10) UNSIGNED NOT NULL,
  `email` varchar(50) NOT NULL,
  `location` varchar(200) NOT NULL,
  `number` varchar(20) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `Contact`
--

INSERT INTO `Contact` (`id`, `email`, `location`, `number`, `createdAt`, `updatedAt`) VALUES
(1, 'selim@gmail.com', 'West Kazipara, Mirpur, Dhaka', '+8801623-167740', '2023-11-03 06:44:00', '2023-11-03 06:44:00');

-- --------------------------------------------------------

--
-- Table structure for table `Services`
--

CREATE TABLE `Services` (
  `id` int(10) UNSIGNED NOT NULL,
  `title` varchar(50) NOT NULL,
  `description` varchar(150) NOT NULL,
  `img1` varchar(500) NOT NULL,
  `img2` varchar(500) NOT NULL,
  `img3` varchar(500) NOT NULL,
  `img4` varchar(500) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `Services`
--

INSERT INTO `Services` (`id`, `title`, `description`, `img1`, `img2`, `img3`, `img4`, `createdAt`, `updatedAt`) VALUES
(1, 'Website building', ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pulvinar felis posuere', 'https://thumbs.dreamstime.com/b/conceptual-hand-writing-showing-our-services-concept-meaning-occupation-function-serving-intangible-products-male-wear-160644151.jpg', 'https://img.freepik.com/premium-photo/businessman-with-business-target-goal-digital-screen-dashboard_10541-9277.jpg', 'https://img.freepik.com/premium-photo/businessman-using-computer-dms-documents-management-erp-software-document-system-management-automation-software-archiving-efficiently-manage-information-files_10541-9258.jpg?size=626&ext=jpg', 'https://img.freepik.com/premium-photo/businessman-pointing-arrow-graph-corporate-future-success-growing-growth-concept_10541-9160.jpg?size=626&ext=jpg', '2023-11-03 07:34:58', '2023-11-03 07:34:58'),
(2, 'Mobile App', ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pulvinar felis posuere', 'https://www.baypmtech.com/wp-content/uploads/2021/04/istock-131404860final.gif', 'https://cdn.outsource2india.com/featured-images/best-mobile-apps-smartphones.jpg', 'https://martech.org/wp-content/uploads/2014/08/mobile-smartphone-apps-ss-1920.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDfvqk1WwgH_8i3R2BUMG_6qy4JGnpQKyQJwEpcb1pb2aq32NVSzjocr5u_eKQsAh363c&usqp=CAU', '2023-11-03 07:38:31', '2023-11-03 07:38:31'),
(3, 'IOS App Design', ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pulvinar felis posuere', 'https://developerbrothers.com/wp-content/uploads/2021/05/iOS-App-Development-2.png', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx7m46ATJQCPWTd2tFlZ2ba1a4McCpeH9V7jKqd5FXe-5KPxRmtI4aazVy_vC0Nz_KdRI&usqp=CAU', 'https://www.indiainternets.com/img/iphone-app-development-img.jpg', 'https://apextechno.co.uk/wp-content/uploads/2020/08/ios-app-dev-page.jpg', '2023-11-03 07:41:04', '2023-11-03 07:41:04'),
(4, 'Desktop App deveopment', ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pulvinar felis posuere', 'https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/187700248/original/84a5b84d9b67ab7392d85af0f22e3cc65d7ee4ed/design-desktop-application-ui-ux.jpg', 'https://img.freepik.com/premium-vector/ux-ui-design-concept-banner-web-page-presentation-infographics_617090-29.jpg', 'https://ibyteinfomatics.com/blog/wp-content/uploads/2023/02/Top-6-UIUX-Design-Trends-In-2023.png', 'https://apacentrepreneur.com/wp-content/uploads/2022/08/UI_UX-Design.jpg', '2023-11-03 07:43:49', '2023-11-03 07:43:49');

-- --------------------------------------------------------

--
-- Table structure for table `User`
--

CREATE TABLE `User` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `number` varchar(50) NOT NULL,
  `password` varchar(100) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `User`
--

INSERT INTO `User` (`id`, `name`, `email`, `number`, `password`, `createdAt`, `updatedAt`) VALUES
(1, 'Selim Reza', 'selim@gmail.com', '01623167740', 'demo123', '2023-11-03 09:15:30', '2023-11-03 09:15:30'),
(2, 'Romim Hasan', 'romim@gmail.com', '0162244556633', '12345', '2023-11-03 14:12:19', '2023-11-03 14:12:19'),
(3, 'Sagor Ali', 'sagor@gmail.com', '01914785266', '12345', '2023-11-03 14:15:06', '2023-11-03 14:15:06'),
(4, 'MnSabbir', 'mnsabbir@gmail.com', '01765709842', '12345', '2023-11-03 14:16:23', '2023-11-03 14:16:23'),
(5, 'Md Milon', 'milon@gmail.com', '01730905564', '12345', '2023-11-04 23:36:54', '2023-11-04 23:36:54'),
(6, 'Sweet', 'sweet@gmail.com', '01752639521', '12345', '2023-11-04 23:38:42', '2023-11-04 23:38:42');

-- --------------------------------------------------------

--
-- Table structure for table `_prisma_migrations`
--

CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) NOT NULL,
  `checksum` varchar(64) NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) NOT NULL,
  `logs` text DEFAULT NULL,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `applied_steps_count` int(10) UNSIGNED NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `_prisma_migrations`
--

INSERT INTO `_prisma_migrations` (`id`, `checksum`, `finished_at`, `migration_name`, `logs`, `rolled_back_at`, `started_at`, `applied_steps_count`) VALUES
('d959899c-a3d2-4f23-b53f-b53406d11805', '17abedde08dd4adc749e6bb11613f4e1deebc40c80145de3d2c959d883cf5fb1', '2023-11-03 12:02:08.499', '20231103120208_first_migration', NULL, NULL, '2023-11-03 12:02:08.440', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Blog`
--
ALTER TABLE `Blog`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Blog_userId_fkey` (`userId`);

--
-- Indexes for table `Contact`
--
ALTER TABLE `Contact`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Services`
--
ALTER TABLE `Services`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `User`
--
ALTER TABLE `User`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `User_email_key` (`email`),
  ADD UNIQUE KEY `User_number_key` (`number`);

--
-- Indexes for table `_prisma_migrations`
--
ALTER TABLE `_prisma_migrations`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Blog`
--
ALTER TABLE `Blog`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `Contact`
--
ALTER TABLE `Contact`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `Services`
--
ALTER TABLE `Services`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `User`
--
ALTER TABLE `User`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `Blog`
--
ALTER TABLE `Blog`
  ADD CONSTRAINT `Blog_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User` (`id`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
