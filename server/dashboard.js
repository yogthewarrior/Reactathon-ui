const utils = require("./utils");

module.exports = function(app){
  app.get('/',function(req,res){
    return utils.sendJSON(res,"Bonjour, you landed on the right page, it's working")
  })

  app.post('/login',function(req,res){
    // console.log("req...",req);
    return utils.sendJSON(res,{data:"Login Success",username: req.body.username})
  })
  
  app.get('/getevents',function(req,res){
    
    return utils.sendJSON(res,
      {
        events: [
          {
          eventName: 'Machine Learning',
          eventId: '1',
          imageURL :'https://www.techgig.com/files/Innomind_HackathonBanner_1526624107.png',
          createdBy : 'createdBy',
          startDate: 'Jul 4th 2018',
          endDate: 'Jul 10th 2018',
          readMoreConent: 'Machine Learning is a field of computer science using which computer systems get the ability to decipher data and learn from it. This is often done using statistical techniques where one doesn’t have to explicitly program the systems to identify patterns, extract the learning from data and improve in the process. It was a term coined by artificial intelligence and computer gaming expert Arthur Samuel. Google Now, Apple’s Siri and Amazon Alexa, three of the most popular virtual assistants in use today are good examples where machine learning is playing a vital role in improving the quality of our lives. In this context, machine learning algorithms will collect data related to your previous interactions with the virtual assistant and use it to deliver results tailored to your preference.',
          deliverables : [' Submit the source code. A link to your code on GitHub (this repository may be public or private - if private, access must be given in the testing instructions provided). Code should be compilable and runnable. - Mandatory',
        'A presentation which include a brief explanation of what your system does and what makes it unique. A way to access your application for judging and testing - Mandatory'],
        faq: [
          {
            qes : 'How can I participate in the contest?',
            ans: 'Register for the contest by completing the registration form.'
          },
          {
            qes : 'How will I judge my performance in the contest?',
            ans: 'Your submission will be evaluated by the judges and scores will be displayed on the Leaderboard. We will also keep you posted on the same via emails.'
          }
        ]
        },
          {
          eventName: 'Mobility & Location Services',
          eventId: '2',
          imageURL :'https://www.techgig.com/files/CG2018_Mobility_1522835083.png',
          createdBy : 'createdBy',
          startDate: 'Aug 4th 2018',
          endDate: 'Aug 14th 2018',
          readMoreConent: 'AI, Blockchain, Mobility, IoT, whatever your underlying technology the core fabric connecting them all and offering context is Location services and intelligence. Location plays a vital role in the connected world we live in to help us make sense of the world around us. Whether we’re using it to track patterns and derive insights or simply, make our way around a city. As the use of mobile technology increases and we become more connected, more hyper-local data is available to create services and applications. From ride-sharing to targeted advertisements, new services and applications that leverage our mobile technology and location data are prevalent. With location and map data you can create solutions that better connect our growing cities and populations.',
          deliverables : [' Submit the source code. A link to your code on GitHub (this repository may be public or private - if private, access must be given in the testing instructions provided). Code should be compilable and runnable. - Mandatory',
          'A presentation which include a brief explanation of what your system does and what makes it unique. A way to access your application for judging and testing - Mandatory'],
          faq: [
            {
              qes : 'How can I participate in the contest?',
              ans: 'Register for the contest by completing the registration form.'
            },
            {
              qes : 'How will I judge my performance in the contest?',
              ans: 'Your submission will be evaluated by the judges and scores will be displayed on the Leaderboard. We will also keep you posted on the same via emails.'
            }
          ]
        },
          {
          eventName: 'Big Data',
          eventId: '3',
          imageURL :'https://www.techgig.com/files/CG2018_Data-Engineering-big-dat_1522839552.png',
          createdBy : 'createdBy',
          startDate: 'Sep 4th 2018',
          endDate: 'Sep 14th 2018',
          readMoreConent: 'There is a huge amount of data out there that companies can leverage to their advantage. This data, most of which is large volumes of unstructured data, when accurately interpreted can help organizations make informed business decisions. Big Data analytics is that process of analysing the large sets of data (structured and unstructured) to identify patterns and trends especially when it comes to predicting customer behaviour and reducing operational overheads. A data analytics professional need to typically deal with the 3 Vs of Big Data, i.e. Volume, Velocity, Veracity. Volume is the large chunk of data that is being churned out, Velocity is the speed at which this data is being generated and Veracity pertains to the validity of the data i.e. ensuring whether the data being collected is accurate as well as intended for the right purpose. Scope of Big Data in your Career Enterprises are increasingly investing in big data solutions in India. In fact, India has topped big data and analytics adoption in the APAC region as per a recent survey.',
          deliverables : [' Submit the source code. A link to your code on GitHub (this repository may be public or private - if private, access must be given in the testing instructions provided). Code should be compilable and runnable. - Mandatory',
          'A presentation which include a brief explanation of what your system does and what makes it unique. A way to access your application for judging and testing - Mandatory'],
          faq: [
            {
              qes : 'How can I participate in the contest?',
              ans: 'Register for the contest by completing the registration form.'
            },
            {
              qes : 'How will I judge my performance in the contest?',
              ans: 'Your submission will be evaluated by the judges and scores will be displayed on the Leaderboard. We will also keep you posted on the same via emails.'
            }
          ]
        },
          {
          eventName: 'Cloud Computing',
          eventId: '3',
          imageURL :'https://www.techgig.com/files/CG2018_IBMBluemix-forcloud_1522839615.png ',
          createdBy : 'Sep 1st 2018',
          startDate: 'Sep 4th 2018',
          endDate: 'endDate',
          readMoreConent: 'Did you know that Cloud Computing is expected to create more than 1 million jobs in India by 2022, as per a recent study. Whether you are a fresher looking to make it big in the field of Information Technology through a career in cloud computing or are an expert IT professional looking to upskill, cloud computing is the future for you. Enterprises across India are adopting cloud solutions for a wide variety of reasons, some of these include:',
          deliverables : [' Submit the source code. A link to your code on GitHub (this repository may be public or private - if private, access must be given in the testing instructions provided). Code should be compilable and runnable. - Mandatory',
          'A presentation which include a brief explanation of what your system does and what makes it unique. A way to access your application for judging and testing - Mandatory'],
          faq: [
            {
              qes : 'How can I participate in the contest?',
              ans: 'Register for the contest by completing the registration form.'
            },
            {
              qes : 'How will I judge my performance in the contest?',
              ans: 'Your submission will be evaluated by the judges and scores will be displayed on the Leaderboard. We will also keep you posted on the same via emails.'
            }
          ]
        }
      ]
      }
    )
  })
}
