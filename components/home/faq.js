// "use client";

// import React from "react";
// import { Disclosure } from "@headlessui/react";
// import { ChevronUpIcon } from "@heroicons/react/24/solid";

// import useTranslation from 'next-translate/useTranslation'
// import Link from 'next/link'

// const Faq = () => {
  
//   return (
//     <div className="container mx-auto p-8 xl:px-0">
//       <div className="mx-auto w-full max-w-2xl rounded-2xl p-2">
//           <div className="mb-5">
//             <Disclosure>
//               {({ open }) => (
//                 <>
//                   <Disclosure.Button className="dark:bg-trueGray-800 flex w-full items-center justify-between rounded-lg bg-gray-50 p-4 text-left text-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100/75 dark:text-gray-200">
//                     <span>{quest1}</span>
//                     <ChevronUpIcon
//                       className={`${
//                         open ? "rotate-180" : ""
//                       } h-5 w-5 text-indigo-500`}
//                     />
//                   </Disclosure.Button>
//                   <Disclosure.Panel className="px-4 pb-2 pt-4 text-gray-500 dark:text-gray-300">
//                     {ans1}
//                   </Disclosure.Panel>
//                 </>
//               )}
//             </Disclosure>
//           </div>
//           <div className="mb-5">
//             <Disclosure>
//               {({ open }) => (
//                 <>
//                   <Disclosure.Button className="dark:bg-trueGray-800 flex w-full items-center justify-between rounded-lg bg-gray-50 p-4 text-left text-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100/75 dark:text-gray-200">
//                     <span>{quest2}</span>
//                     <ChevronUpIcon
//                       className={`${
//                         open ? "rotate-180" : ""
//                       } h-5 w-5 text-indigo-500`}
//                     />
//                   </Disclosure.Button>
//                   <Disclosure.Panel className="px-4 pb-2 pt-4 text-gray-500 dark:text-gray-300">
//                     {ans2}
//                   </Disclosure.Panel>
//                 </>
//               )}
//             </Disclosure>
//           </div>
        
//       </div>
//     </div>
//   );
// }
// const { t, lang } = useTranslation('all')
// const quest1 = t('home.faq.question.1')
// const quest2 = t('home.faq.question.2')
// const ans1 = t('home.faq.answer.1')
// const ans2 = t('home.faq.answer.2')

// // const faqdata = [
// //   {
// //     question: quest1,
// //     answer: ans1,
// //   },
// //   {
// //     question: quest2,
// //     answer: ans2,
// //   },
// // ];

// export default Faq;