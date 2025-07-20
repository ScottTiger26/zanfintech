// // import { useAuth } from "@/hooks/useAuth";
// // import { useQuery } from "@tanstack/react-query";
// // import { Link } from "react-router-dom";
// // import Header from "@/components/Header";
// // import Footer from "@/components/Footer";
// // import MarketData from "@/components/MarketData";
// // import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// // import { Button } from "@/components/ui/button";
// // import { User, TrendingUp, FileText, Calendar, Bell } from "lucide-react";

// // export default function Home() {
// //   const { user } = useAuth();

// //   const { data: userSubscriptions } = useQuery({
// //     queryKey: ["/api/user/subscriptions"],
// //     enabled: !!user,
// //   });

// //   const { data: recentPosts } = useQuery({
// //     queryKey: ["/api/blog/posts", { published: true }],
// //   });

// //   return (
// //     <div className="min-h-screen bg-gray-50">
// //       <Header />

// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
// //         {/* Welcome Section */}
// //         <div className="mb-8">
// //           <div className="bg-gradient-to-r from-trade-blue to-blue-800 text-white rounded-xl p-6">
// //             <div className="flex items-center justify-between">
// //               <div>
// //                 <h1 className="text-3xl font-bold mb-2">
// //                   Welcome back, {user?.firstName || "User"}!
// //                 </h1>
// //                 <p className="text-blue-100">
// //                   Stay updated with the latest market insights and manage your investments
// //                 </p>
// //               </div>
// //               <div className="hidden md:block">
// //                 <div className="bg-white/10 backdrop-blur-md rounded-lg p-4">
// //                   <TrendingUp className="h-8 w-8 text-white" />
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Quick Actions */}
// //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
// //           <Card className="hover:shadow-lg transition-shadow">
// //             <CardHeader className="pb-3">
// //               <CardTitle className="text-sm font-medium text-gray-600">Quick Actions</CardTitle>
// //             </CardHeader>
// //             <CardContent>
// //               <Link to="/contact">
// //                 <Button className="w-full bg-trade-green hover:bg-trade-green/90">
// //                   <Calendar className="mr-2 h-4 w-4" />
// //                   Book Consultation
// //                 </Button>
// //               </Link>
// //             </CardContent>
// //           </Card>

// //           <Card className="hover:shadow-lg transition-shadow">
// //             <CardHeader className="pb-3">
// //               <CardTitle className="text-sm font-medium text-gray-600">Research</CardTitle>
// //             </CardHeader>
// //             <CardContent>
// //               <Link to="/blog">
// //                 <Button variant="outline" className="w-full">
// //                   <FileText className="mr-2 h-4 w-4" />
// //                   Latest Reports
// //                 </Button>
// //               </Link>
// //             </CardContent>
// //           </Card>

// //           <Card className="hover:shadow-lg transition-shadow">
// //             <CardHeader className="pb-3">
// //               <CardTitle className="text-sm font-medium text-gray-600">Market Data</CardTitle>
// //             </CardHeader>
// //             <CardContent>
// //               <Link to="/dashboard">
// //                 <Button variant="outline" className="w-full">
// //                   <TrendingUp className="mr-2 h-4 w-4" />
// //                   View Dashboard
// //                 </Button>
// //               </Link>
// //             </CardContent>
// //           </Card>

// //           <Card className="hover:shadow-lg transition-shadow">
// //             <CardHeader className="pb-3">
// //               <CardTitle className="text-sm font-medium text-gray-600">Services</CardTitle>
// //             </CardHeader>
// //             <CardContent>
// //               <Link to="/services">
// //                 <Button variant="outline" className="w-full">
// //                   <User className="mr-2 h-4 w-4" />
// //                   Explore Services
// //                 </Button>
// //               </Link>
// //             </CardContent>
// //           </Card>
// //         </div>

// //         {/* User Subscriptions */}
// //         {userSubscriptions && userSubscriptions.length > 0 && (
// //           <Card className="mb-8">
// //             <CardHeader>
// //               <CardTitle className="flex items-center">
// //                 <Bell className="mr-2 h-5 w-5" />
// //                 Your Subscriptions
// //               </CardTitle>
// //             </CardHeader>
// //             <CardContent>
// //               <div className="space-y-4">
// //                 {userSubscriptions.map((subscription) => (
// //                   <div key={subscription.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
// //                     <div>
// //                       <h4 className="font-medium capitalize">{subscription.planType} Plan</h4>
// //                       <p className="text-sm text-gray-600">
// //                         Status: <span className="capitalize">{subscription.status}</span>
// //                       </p>
// //                     </div>
// //                     <div className="text-right">
// //                       <p className="text-sm text-gray-600">
// //                         {subscription.endDate
// //                           ? `Expires: ${new Date(subscription.endDate).toLocaleDateString()}`
// //                           : "Active"}
// //                       </p>
// //                     </div>
// //                   </div>
// //                 ))}
// //               </div>
// //             </CardContent>
// //           </Card>
// //         )}

// //         {/* Market Overview */}
// //         <div className="mb-8">
// //           <h2 className="text-2xl font-bold text-gray-900 mb-6">Market Overview</h2>
// //           <MarketData />
// //         </div>

// //         {/* Recent Research */}
// //         {recentPosts && recentPosts.length > 0 && (
// //           <Card>
// //             <CardHeader>
// //               <div className="flex items-center justify-between">
// //                 <CardTitle>Latest Research & Insights</CardTitle>
// //                 <Link to="/blog">
// //                   <Button variant="outline" size="sm">
// //                     View All
// //                   </Button>
// //                 </Link>
// //               </div>
// //             </CardHeader>
// //             <CardContent>
// //               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
// //                 {recentPosts.slice(0, 3).map((post) => (
// //                   <div key={post.id} className="p-4 bg-gray-50 rounded-lg">
// //                     <h4 className="font-medium mb-2">{post.title}</h4>
// //                     <p className="text-sm text-gray-600 mb-3">{post.excerpt}</p>
// //                     <Link to={`/blog/${post.slug}`}>
// //                       <Button variant="link" className="p-0 h-auto text-trade-blue">
// //                         Read More
// //                       </Button>
// //                     </Link>
// //                   </div>
// //                 ))}
// //               </div>
// //             </CardContent>
// //           </Card>
// //         )}
// //       </div>

// //       <Footer />
// //     </div>
// //   );
// // }





// import { useAuth } from "@/hooks/useAuth";
// import { useQuery } from "@tanstack/react-query";
// import { Link } from "react-router-dom";

// import Header from "@/components/Header";
// import Footer from "@/components/Footer";
// import MarketData from "@/components/MarketData";

// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";

// import {
//   User,
//   TrendingUp,
//   FileText,
//   Calendar,
//   Bell,
// } from "lucide-react";

// export default function Home() {
//   const { user } = useAuth();

//   const { data: userSubscriptions } = useQuery({
//     queryKey: ["/api/user/subscriptions"],
//     enabled: !!user,
//   });

//   const { data: recentPosts } = useQuery({
//     queryKey: ["/api/blog/posts", { published: true }],
//   });

//   return (
//     <div className="min-h-screen bg-gray-50 text-gray-900">
//       <Header />

//       <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">

//         {/* Welcome Banner */}
//         <section className="bg-gradient-to-r from-trade-blue to-blue-800 text-white rounded-2xl p-8 shadow-sm">
//           <div className="flex flex-col md:flex-row items-center justify-between gap-4">
//             <div>
//               <h1 className="text-3xl font-bold">
//                 Welcome back, {user?.firstName || "Investor"}!
//               </h1>
//               <p className="text-blue-100 mt-2">
//                 Stay ahead with curated market insights and manage your portfolio smarter.
//               </p>
//             </div>
//             <div className="hidden md:block bg-white/10 backdrop-blur-md p-4 rounded-xl">
//               <TrendingUp className="w-10 h-10 text-white" />
//             </div>
//           </div>
//         </section>

//         {/* Quick Actions */}
//         <section>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {[
//               {
//                 title: "Quick Actions",
//                 label: "Book Consultation",
//                 icon: <Calendar className="mr-2 h-4 w-4" />,
//                 to: "/contact",
//                 variant: "primary",
//               },
//               {
//                 title: "Research",
//                 label: "Latest Reports",
//                 icon: <FileText className="mr-2 h-4 w-4" />,
//                 to: "/blog",
//               },
//               {
//                 title: "Market Data",
//                 label: "View Dashboard",
//                 icon: <TrendingUp className="mr-2 h-4 w-4" />,
//                 to: "/dashboard",
//               },
//               {
//                 title: "Services",
//                 label: "Explore Services",
//                 icon: <User className="mr-2 h-4 w-4" />,
//                 to: "/services",
//               },
//             ].map(({ title, label, icon, to, variant = "outline" }) => (
//               <Card key={title} className="hover:shadow-lg transition-all duration-200">
//                 <CardHeader className="pb-3">
//                   <CardTitle className="text-sm font-medium text-gray-600">{title}</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <Link to={to}>
//                     <Button variant={variant} className="w-full">
//                       {icon}
//                       {label}
//                     </Button>
//                   </Link>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </section>

//         {/* Subscriptions */}
//         {userSubscriptions?.length > 0 && (
//           <section>
//             <Card>
//               <CardHeader>
//                 <CardTitle className="flex items-center">
//                   <Bell className="mr-2 h-5 w-5" />
//                   Your Subscriptions
//                 </CardTitle>
//               </CardHeader>
//               <CardContent className="space-y-4">
//                 {userSubscriptions.map((sub) => (
//                   <div
//                     key={sub.id}
//                     className="flex items-center justify-between p-4 bg-white border rounded-lg"
//                   >
//                     <div>
//                       <h4 className="font-semibold capitalize">{sub.planType} Plan</h4>
//                       <p className="text-sm text-gray-600">
//                         Status: <span className="capitalize">{sub.status}</span>
//                       </p>
//                     </div>
//                     <p className="text-sm text-gray-600">
//                       {sub.endDate
//                         ? `Expires: ${new Date(sub.endDate).toLocaleDateString()}`
//                         : "Active"}
//                     </p>
//                   </div>
//                 ))}
//               </CardContent>
//             </Card>
//           </section>
//         )}

//         {/* Market Overview */}
//         <section>
//           <h2 className="text-2xl font-bold mb-4">Market Overview</h2>
//           <MarketData />
//         </section>

//         {/* Recent Research */}
//         {recentPosts?.length > 0 && (
//           <section>
//             <Card>
//               <CardHeader>
//                 <div className="flex items-center justify-between">
//                   <CardTitle>Latest Research & Insights</CardTitle>
//                   <Link to="/blog">
//                     <Button variant="outline" size="sm">
//                       View All
//                     </Button>
//                   </Link>
//                 </div>
//               </CardHeader>
//               <CardContent>
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                   {recentPosts.slice(0, 3).map((post) => (
//                     <div key={post.id} className="p-4 bg-gray-50 rounded-xl border">
//                       <h4 className="font-semibold mb-1">{post.title}</h4>
//                       <p className="text-sm text-gray-600 line-clamp-3 mb-2">
//                         {post.excerpt}
//                       </p>
//                       <Link to={`/blog/${post.slug}`}>
//                         <Button variant="link" className="p-0 h-auto text-trade-blue">
//                           Read More
//                         </Button>
//                       </Link>
//                     </div>
//                   ))}
//                 </div>
//               </CardContent>
//             </Card>
//           </section>
//         )}
//       </main>

//       <Footer />
//     </div>
//   );
// }



// src/pages/Home.jsx
import Header from "@/components/Header";
import Hero from "@/components/Hero";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
    </div>
  );
};

export default Home;
