

      function initialize() {
        var mapOptions = {
          zoom: 5,
          center: amsterdam,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);


        // Initial first demo markers
        var amsterdamMarker = new google.maps.Marker({
            map: map,
            position: amsterdam,
            title: "Student-Alumni Career Talks: Business",
          });
          markers.push(amsterdamMarker);

        var londonMarker = new google.maps.Marker({
            map: map,
            position: london,
            title: "Energy Systems Conference 2016: 21st Century Challenges",
          });
          markers.push(londonMarker);

        var antwerpMarker = new google.maps.Marker({
            map: map,
            position: antwerp,
            title: "MEEGID XIII - 13th International Conference on Molecular Epidemiology and Evolutionary Genetics of Infectious Diseases",
          });
          markers.push(antwerpMarker);

        var leipzigMarker = new google.maps.Marker({
            map: map,
            position: leipzig,
            title: "Seventh International Conference on Engineering Failure Analysis",
          });
          markers.push(leipzigMarker);

          // Paint initial table
        $ (document).ready(function() {

          // Student-Alumni Career Talks: Business
          $("#events_body").append("<tr class=\"event_odd\">").children('tr:last')
          .append("<td class=\"event_title\">Student-Alumni Career Talks: Business</td>")
          .append("<td>Career, Networking, UVA, Alumni</td>")
          .append("<td>Are you an international UvA student or recent graduate and considering starting your career in the business sector? At this Career Talk you will have the opportunity to expand your network and learn how UvA alumni started their business career in the Netherlands. <a href=\"https://student.uva.nl/en/events/content/events/2016/02/career-talks---business-25-february-2016.html\">more...</a></td>")
          .append("<td class=\"event_content\">25. February 2016, 19:15-21:00</td>")
          .append("<td>Amsterdam, The Netherlands</td>")
          .append("<td><a href=\"http://178.62.200.142/ossn/u/Johnfree\">Groffa, J.</a>,</br><a href=\"http://178.62.200.142/ossn/u/Chen\">Chen, Y.</a>,</br><a href=\"http://178.62.200.142/ossn/u/Ashman\">Ashman, H.</a></td>");

          // MEEGID XIII - 13th International Conference on Molecular Epidemiology and Evolutionary Genetics of Infectious Diseases
          $("#events_body").append("<tr class=\"event_even\">").children('tr:last')
          .append("<td class=\"event_title\">MEEGID XIII<br/>13th International Conference on Molecular Epidemiology and Evolutionary Genetics of Infectious Diseases</td>")
          .append("<td>Genetics, Epidemiology</td>")
          .append("<td>Join us at the Institute of Tropical Medicine, Antwerp for MEEGID XIII, the leading conference on the molecular evolution of all pathogens: viruses, pathogenic bacteria, fungi, parasites and prions. <a href=\"http://www.meegidconference.com/\">more...</a></td>")
          .append("<td class=\"event_content\">10-13 May 2016</td>")
          .append("<td>Antwerp, Belgium</td>")
          .append("<td><a href=\"http://178.62.200.142/ossn/u/Foreword\">Foreword, M.L.</a>,<br/><a href=\"http://178.62.200.142/ossn/u/Heath\">Heath, T.</a>,<br/><a href=\"http://178.62.200.142/ossn/u/user01\">Doe, J.</a>,<br/><a href=\"http://178.62.200.142/ossn/u/Timmy\">Berners-Lee, T.</a></td>");          

     		// Energy Systems Conference 2016: 21st Century Challenges
          $("#events_body").append("<tr class=\"event_odd\">").children('tr:last')
          .append("<td class=\"event_title\">Energy Systems Conference 2016: 21st Century Challenges</td>")
          .append("<td>Nano technologies, High-tech surfaces and materials</td>")
          .append("<td>To meet future global energy needs, in ways that are safe, secure, sustainable and affordable, we need a more integrated, intelligent energy system. <a href=\"http://www.energysystemsconference.com/\">more...</a></td>")
          .append("<td class=\"event_content\">14-15 June 2016</td>")
          .append("<td>London, UK</td>")
          .append("<td><a href=\"http://178.62.200.142/ossn/u/Johnny\">Hendlera, J.</a>,<br/><a href=\"http://178.62.200.142/ossn/u/chiltona\">Chiltona, L.</a>,<br/><a href=\"http://178.62.200.142/ossn/u/Archinard\">Archinard, M.</a></td>");


          // Seventh International Conference on Engineering Failure Analysis
          $("#events_body").append("<tr class=\"event_even\">").children('tr:last')
          .append("<td class=\"event_title\">Seventh International Conference on Engineering Failure Analysis</td>")
          .append("<td>Conference, Engineering, Failure Analysis</td>")
          .append("<td>Engineering failure analysis is a key tool for the improvement of the modern innovation cycle now demands that component design involves a whole-of-life approach, incorporating an awareness of manufacture, safety, reliability, environmental sensitivity and disposal.  <a href=\"http://www.icefaconference.com/\">more...</a></td>")
          .append("<td class=\"event_content\">3-6 July 2016</td>")
          .append("<td>Leipzig, Germany</td>")
          .append("<td><a href=\"http://178.62.200.142/ossn/u/Archinard\">Archinard, M.</a>,<br/><a href=\"http://178.62.200.142/ossn/u/chiltona\">Chiltona, L.</a></td>");

          });
      };


    // Repaint event table for Speeches
    $ (document).ready(function() {
        $("#categories_speeches").click(function(){
          $(".event_even").remove();
          $(".event_odd").remove();
          for(var i=0; i<markers.length;i++){
            markers[i].setMap(null);
          };

          // First event
          $("#events_body").append("<tr class=\"event_odd\">").children('tr:last')
          .append("<td class=\"event_title\">ISRII 8th Scientific Meeting</td>")
          .append("<td>Mental and Health conditions, Technology applications, Prevention and lifestyle</td>")
          .append("<td>The International Society for Research on Internet interventions (ISRII), founded in 2004, promotes the scientific study of information and communication technologies targeting behavioral, psychosocial, health and mental health outcomes. <a href=\"http://www.isrii-conference.com/\">more...</a></td>")
          .append("<td class=\"event_content\">7-9 April 2016</td>")
          .append("<td>Seattle, USA</td>")
          .append("<td><a href=\"http://178.62.200.142/ossn/u/Timmy\">Berners-Lee, T.</a>,<br/><a href=\"http://178.62.200.142/ossn/u/Gillies\">Gillies, J.</a>,<br/><a href=\"http://178.62.200.142/ossn/u/Sfaksfak\">Sfak, G.</a>,<br/></td>");

          var marker = new google.maps.Marker({
            map: map,
            position: seattle,
            title: "ISRII 8th Scientific Meeting",
          });
          markers.push(marker);

          // Second event
          $("#events_body").append("<tr class=\"event_even\">").children('tr:last')
          .append("<td class=\"event_title\">Fuel Cells Science and Technology 2016</td>")
          .append("<td>Fossil resources, Green technologies</td>")
          .append("<td>Thousands of fuel cells are being produced annually and sold commercially in a wide range of applications, but continued research, both fundamental and applied, will be essential to help reduce production costs and increase durability. <a href=\"http://www.fuelcelladvances.com/\">more...</a></td>")
          .append("<td class=\"event_content\">13-14 April 2016</td>")
          .append("<td>Glasgow, United Kingdom</td>")
          .append("<td><a href=\"http://178.62.200.142/ossn/u/Bizer\">Bizer, C.</a>,<br/><a href=\"http://178.62.200.142/ossn/u/Johnny\">Hendlera, J.</a>,<br/><a href=\"http://178.62.200.142/ossn/u/Heath\">Heath, T.</a>,<br/></td>");


          var marker = new google.maps.Marker({
            map: map,
            position: glasgow,
            title: "Fuel Cells Science and Technology 2016",
          });
          markers.push(marker);

          // Third event
          $("#events_body").append("<tr class=\"event_odd\">").children('tr:last')
          .append("<td class=\"event_title\">Student-Alumni Career Talks: Research/PhD</td>")
          .append("<td>PhD, Networking, Research</td>")
          .append("<td>Are you an international UvA student or recent graduate and considering starting your career in the research sector? At this Career Talk you will have the opportunity to expand your network and learn how UvA alumni started their research career in the Netherlands. <a href=\"https://student.uva.nl/en/events/content/events/2016/03/career-talks---research-phd-17-march-2016.html\">more...</a></td>")
          .append("<td class=\"event_content\">17 March 2016 19:15-21:00</td>")
          .append("<td>Amsterdam, The Netherlands</td>")
          .append("<td><a href=\"http://178.62.200.142/ossn/u/Hall\">Hall, W.</a></td>");


          var marker = new google.maps.Marker({
            map: map,
            position: amsterdam,
            title: "Student-Alumni Career Talks: Research/PhD",
          });
          markers.push(marker);

          // Seventh International Conference on Engineering Failure Analysis
          $("#events_body").append("<tr class=\"event_even\">").children('tr:last')
          .append("<td class=\"event_title\">Seventh International Conference on Engineering Failure Analysis</td>")
          .append("<td>Conference, Engineering, Failure Analysis</td>")
          .append("<td>Engineering failure analysis is a key tool for the improvement of the modern innovation cycle now demands that component design involves a whole-of-life approach, incorporating an awareness of manufacture, safety, reliability, environmental sensitivity and disposal.  <a href=\"http://www.icefaconference.com/\">more...</a></td>")
          .append("<td class=\"event_content\">3-6 July 2016</td>")
          .append("<td>Leipzig, Germany</td>")
          .append("<td><a href=\"http://178.62.200.142/ossn/u/Archinard\">Archinard, M.</a>,<br/><a href=\"http://178.62.200.142/ossn/u/chiltona\">Chiltona, L.</a></td>");


          var marker = new google.maps.Marker({
            map: map,
            position: leipzig,
            title: "Student-Alumni Career Talks: Research/PhD",
          });
          markers.push(marker);

        });
      });


    // Repaint event table for Networking
    $ (document).ready(function() {
        $("#categories_networking").click(function(){
          $(".event_even").remove();
          $(".event_odd").remove();
          for(var i=0; i<markers.length;i++){
            markers[i].setMap(null);
          };

          // First event
          $("#events_body").append("<tr class=\"event_odd\">").children('tr:last')
          .append("<td class=\"event_title\">ISRII 8th Scientific Meeting</td>")
          .append("<td>Mental and Health conditions, Technology applications, Prevention and lifestyle</td>")
          .append("<td>The International Society for Research on Internet interventions (ISRII), founded in 2004, promotes the scientific study of information and communication technologies targeting behavioral, psychosocial, health and mental health outcomes. <a href=\"http://www.isrii-conference.com/\">more...</a></td>")
          .append("<td class=\"event_content\">7-9 April 2016</td>")
          .append("<td>Seattle, USA</td>")
          .append("<td><a href=\"http://178.62.200.142/ossn/u/Fishy\">Fischetti, M.</a>,<br/><a href=\"http://178.62.200.142/ossn/u/ShadBolt\">Shadbolt, N.</a>,<br/><a href=\"http://178.62.200.142/ossn/u/Johnfree\">Groffa, J.</a>,<br/></td>");

          var marker = new google.maps.Marker({
            map: map,
            position: seattle,
            title: "ISRII 8th Scientific Meeting",
          });
          markers.push(marker);

          // Student-Alumni Career Talks: Business
          $("#events_body").append("<tr class=\"event_even\">").children('tr:last')
          .append("<td class=\"event_title\">Student-Alumni Career Talks: Business</td>")
          .append("<td>Career, Networking, UVA, Alumni</td>")
          .append("<td>Are you an international UvA student or recent graduate and considering starting your career in the business sector? At this Career Talk you will have the opportunity to expand your network and learn how UvA alumni started their business career in the Netherlands. <a href=\"https://student.uva.nl/en/events/content/events/2016/02/career-talks---business-25-february-2016.html\">more...</a></td>")
          .append("<td class=\"event_content\">25. February 2016, 19:15-21:00</td>")
          .append("<td>Amsterdam, The Netherlands</td>")
          .append("<td><a href=\"http://178.62.200.142/ossn/u/Idehen\">Idehen, K.</a></td>");


          var marker = new google.maps.Marker({
            map: map,
            position: amsterdam,
            title: "Student-Alumni Career Talks: Business",
          });
          markers.push(marker);

          // Student-Alumni Career Talks: Research
          $("#events_body").append("<tr class=\"event_odd\">").children('tr:last')
          .append("<td class=\"event_title\">Student-Alumni Career Talks: Research/PhD</td>")
          .append("<td>PhD, Networking, Research</td>")
          .append("<td>Are you an international UvA student or recent graduate and considering starting your career in the research sector? At this Career Talk you will have the opportunity to expand your network and learn how UvA alumni started their research career in the Netherlands. <a href=\"https://student.uva.nl/en/events/content/events/2016/03/career-talks---research-phd-17-march-2016.html\">more...</a></td>")
          .append("<td class=\"event_content\">17 March 2016 19:15-21:00</td>")
          .append("<td>Amsterdam, The Netherlands</td>")
          .append("<td></td>");

          var marker = new google.maps.Marker({
            map: map,
            position: amsterdam,
            title: "Student-Alumni Career Talks: Business",
          });
          markers.push(marker);

          // Seventh International Conference on Engineering Failure Analysis
          $("#events_body").append("<tr class=\"event_even\">").children('tr:last')
          .append("<td class=\"event_title\">Seventh International Conference on Engineering Failure Analysis</td>")
          .append("<td>Conference, Engineering, Failure Analysis</td>")
          .append("<td>Engineering failure analysis is a key tool for the improvement of the modern innovation cycle now demands that component design involves a whole-of-life approach, incorporating an awareness of manufacture, safety, reliability, environmental sensitivity and disposal.  <a href=\"http://www.icefaconference.com/\">more...</a></td>")
          .append("<td class=\"event_content\">3-6 July 2016</td>")
          .append("<td>Leipzig, Germany</td>")
          .append("<td><a href=\"http://178.62.200.142/ossn/u/Chen\">Chen, Y.</a>,<br/><a href=\"http://178.62.200.142/ossn/u/Pollerman\">Pollerman, B.Z.</a>,<br/><a href=\"http://178.62.200.142/ossn/u/Marijn\">Pellowa, M.</a>,<br/><a href=\"http://178.62.200.142/ossn/u/Khateb\">Khateb, A.</a>,<br/><a href=\"http://178.62.200.142/ossn/u/Idehen\">Idehen, K.</a>,<br/></td>");


          var marker = new google.maps.Marker({
            map: map,
            position: leipzig,
            title: "Student-Alumni Career Talks: Research/PhD",
          });
          markers.push(marker);

        });
      });


    // Repaint event table for Career
    $ (document).ready(function() {
        $("#categories_career").click(function(){
          $(".event_even").remove();
          $(".event_odd").remove();
          for(var i=0; i<markers.length;i++){
            markers[i].setMap(null);
          };

          // First event
          $("#events_body").append("<tr class=\"event_odd\">").children('tr:last')
          .append("<td class=\"event_title\">Student-Alumni Career Talks: Business</td>")
          .append("<td>Career, Networking, UVA, Alumni</td>")
          .append("<td>Are you an international UvA student or recent graduate and considering starting your career in the business sector? At this Career Talk you will have the opportunity to expand your network and learn how UvA alumni started their business career in the Netherlands. <a href=\"https://student.uva.nl/en/events/content/events/2016/02/career-talks---business-25-february-2016.html\">more...</a></td>")
          .append("<td class=\"event_content\">25. February 2016, 19:15-21:00</td>")
          .append("<td>Amsterdam, The Netherlands</td>")
          .append("<td><a href=\"http://178.62.200.142/ossn/u/Foreword\">Foreword, M.L.</a>,<br/><a href=\"http://178.62.200.142/ossn/u/Heath\">Heath, T.</a></td>");
         

          var marker = new google.maps.Marker({
            map: map,
            position: amsterdam,
            title: "Student-Alumni Career Talks: Business",
          });
          markers.push(marker);

          // Student-Alumni Career Talks: Research/PhD
          $("#events_body").append("<tr class=\"event_even\">").children('tr:last')
          .append("<td class=\"event_title\">Student-Alumni Career Talks: Research/PhD</td>")
          .append("<td>PhD, Networking, Research</td>")
          .append("<td>Are you an international UvA student or recent graduate and considering starting your career in the research sector? At this Career Talk you will have the opportunity to expand your network and learn how UvA alumni started their research career in the Netherlands. <a href=\"https://student.uva.nl/en/events/content/events/2016/03/career-talks---research-phd-17-march-2016.html\">more...</a></td>")
          .append("<td class=\"event_content\">17 March 2016 19:15-21:00</td>")
          .append("<td>Amsterdam, The Netherlands</td>")
          .append("<td><a href=\"http://178.62.200.142/ossn/u/Sfaksfak\">Sfak, G.</a></td>");          

          var marker = new google.maps.Marker({
            map: map,
            position: amsterdam,
            title: "Student-Alumni Career Talks: Research/PhD",
          });
          markers.push(marker);

          // MEEGID XIII - 13th International Conference on Molecular Epidemiology and Evolutionary Genetics of Infectious Diseases
          $("#events_body").append("<tr class=\"event_odd\">").children('tr:last')
          .append("<td class=\"event_title\">MEEGID XIII<br/>13th International Conference on Molecular Epidemiology and Evolutionary Genetics of Infectious Diseases</td>")
          .append("<td>Genetics, Epidemiology</td>")
          .append("<td>Join us at the Institute of Tropical Medicine, Antwerp for MEEGID XIII, the leading conference on the molecular evolution of all pathogens: viruses, pathogenic bacteria, fungi, parasites and prions. <a href=\"http://www.meegidconference.com/\">more...</a></td>")
          .append("<td class=\"event_content\">10-13 May 2016</td>")
          .append("<td>Antwerp, Belgium</td>")
          .append("<td><a href=\"http://178.62.200.142/ossn/u/Foreword\">Foreword, M.L.</a>,<br/><a href=\"http://178.62.200.142/ossn/u/Heath\">Heath, T.</a>,<br/><a href=\"http://178.62.200.142/ossn/u/user01\">Doe, J.</a>,<br/><a href=\"http://178.62.200.142/ossn/u/Timmy\">Berners-Lee, T.</a></td>");          

          var marker = new google.maps.Marker({
            map: map,
            position: antwerp,
            title: "MEEGID XIII 13th International Conference on Molecular Epidemiology and Evolutionary Genetics of Infectious Diseases",
          });
          markers.push(marker);          

          // EcoSummit 2016 - Ecological Sustainability: Engineering Change
          $("#events_body").append("<tr class=\"event_even\">").children('tr:last')
          .append("<td class=\"event_title\">EcoSummit 2016<br/>Ecological Sustainability: Engineering Change</td>")
          .append("<td>Ecology, Sustainability, Environment</td>")
          .append("<td>CThis conference series was founded in 1996 in Copenhagen, as a forum to meet the demands of scientists working in several new ecological disciplines, and who required a better understanding of the concepts and methods for a holistic use of ecology in environmental management. <a href=\"http://www.ecosummit2016.org/\">more...</a></td>")
          .append("<td class=\"event_content\">29 August - 1 September 2016</td>")
          .append("<td>Le Corum, Montpellier, France</td>")
          .append("<td><a href=\"http://178.62.200.142/ossn/u/Idehen\">Idehen, K.</a>,<br/><a href=\"http://178.62.200.142/ossn/u/Fishy\">Fischetti, M.</a></td>");          

          var marker = new google.maps.Marker({
            map: map,
            position: le_corum,
            title: "MEEGID XIII EcoSummit 2016<br/>Ecological Sustainability: Engineering Change",
          });
          markers.push(marker); 

        });
      });



    // Repaint event table for Conferences
    $ (document).ready(function() {
        $("#categories_conferences").click(function(){
          $(".event_even").remove();
          $(".event_odd").remove();
          for(var i=0; i<markers.length;i++){
            markers[i].setMap(null);
          };

          // First element
          $("#events_body").append("<tr class=\"event_odd\">").children('tr:last')
          .append("<td class=\"event_title\">Green and Sustainable Chemistry Conference</td>")
          .append("<td>Mineral and non-fossil resources, Green and sustainable products</td>")
          .append("<td>As the world’s population edges towards 9 billion, the strain on the planet’s resources is steadily increasing. In both the developed and developing world there is a growing demand for food, manufactured goods and improved access to clean water and fuel. <a href=\"http://www.greensuschemconf.com/\">more...</a></td>")
          .append("<td class=\"event_content\">3-6 April 2016</td>")
          .append("<td>Berlin, Germany</td>")
          .append("<td><a href=\"http://178.62.200.142/ossn/u/chiltona\">Chiltona, L.</a></td>");

          var marker = new google.maps.Marker({
            map: map,
            position: berlin,
            title: "Green and Sustainable Chemistry Conference",
          });
          markers.push(marker); 

          // Energy Systems Conference 2016: 21st Century Challenges
          $("#events_body").append("<tr class=\"event_even\">").children('tr:last')
          .append("<td class=\"event_title\">Energy Systems Conference 2016: 21st Century Challenges</td>")
          .append("<td>Nano technologies, High-tech surfaces and materials</td>")
          .append("<td>To meet future global energy needs, in ways that are safe, secure, sustainable and affordable, we need a more integrated, intelligent energy system. <a href=\"http://www.energysystemsconference.com/\">more...</a></td>")
          .append("<td class=\"event_content\">14-15 June 2016</td>")
          .append("<td>London, UK</td>")
          .append("<td><a href=\"http://178.62.200.142/ossn/u/Johnny\">Hendlera, J.</a>,<br/><a href=\"http://178.62.200.142/ossn/u/chiltona\">Chiltona, L.</a>,<br/><a href=\"http://178.62.200.142/ossn/u/Archinard\">Archinard, M.</a></td>");


          var marker = new google.maps.Marker({
            map: map,
            position: london,
            title: "Energy Systems Conference 2016: 21st Century Challenges",
          });
          markers.push(marker); 

          // 6th International Colloids Conference
          $("#events_body").append("<tr class=\"event_odd\">").children('tr:last')
          .append("<td class=\"event_title\">6th International Colloids Conference</td>")
          .append("<td>Global and systemic risk analysis, Energy</td>")
          .append("<td>Colloid and Interface Science is a boundary-crossing discipline that continues to drive new technologies and meet new challenges: for example in energy, medicine, diagnostics, climate change and resource efficiency. <a href=\"http://www.colloidsconference.com/\">more...</a></td>")
          .append("<td class=\"event_content\">19-22 June 2016</td>")
          .append("<td>Berlin, Germany</td>")
          .append("<td></td>");

          var marker = new google.maps.Marker({
            map: map,
            position: berlin,
            title: "Energy Systems Conference 2016: 21st Century Challenges",
          });
          markers.push(marker);

          // EcoSummit 2016 - Ecological Sustainability: Engineering Change
          $("#events_body").append("<tr class=\"event_even\">").children('tr:last')
          .append("<td class=\"event_title\">EcoSummit 2016<br/>Ecological Sustainability: Engineering Change</td>")
          .append("<td>Ecology, Sustainability, Environment</td>")
          .append("<td>CThis conference series was founded in 1996 in Copenhagen, as a forum to meet the demands of scientists working in several new ecological disciplines, and who required a better understanding of the concepts and methods for a holistic use of ecology in environmental management. <a href=\"http://www.ecosummit2016.org/\">more...</a></td>")
          .append("<td class=\"event_content\">29 August - 1 September 2016</td>")
          .append("<td>Le Corum, Montpellier, France</td>")
          .append("<td><a href=\"http://178.62.200.142/ossn/u/ShadBolt\">Shadbolt, N.</a></td>");

          var marker = new google.maps.Marker({
            map: map,
            position: le_corum,
            title: "EcoSummit 2016 - Ecological Sustainability: Engineering Change",
          });
          markers.push(marker);

          // 11th Brain Research Conference<br/>4th RNA Metabolism in Neurological Disease
          $("#events_body").append("<tr class=\"event_odd\">").children('tr:last')
          .append("<td class=\"event_title\">11th Brain Research Conference<br/>4th RNA Metabolism in Neurological Disease</td>")
          .append("<td>Nano technologies, High-tech surfaces and materials</td>")
          .append("<td>Complex networks of RNA-protein interactions regulate post-transcriptional gene expression. RNA metabolism is particularly complex in neurons, involving extensive diversification of gene expression through splicing and redistribution of RNA subsets to the distant compartments where they ultimately function. <a href=\"http://www.brainresearchconference.com/\">more...</a></td>")
          .append("<td class=\"event_content\">10-11 November 2016</td>")
          .append("<td>Paradise Point, San Diego, USA</td>")
          .append("<td><a href=\"http://178.62.200.142/ossn/u/Pollerman\">Pollerman, B.Z.</a></td>");

          var marker = new google.maps.Marker({
            map: map,
            position: paradise_point,
            title: "11th Brain Research Conference - 4th RNA Metabolism in Neurological Disease",
          });
          markers.push(marker);

        });
      });


      // Repaint event table for Local
      $ (document).ready(function() {
        $("#categories_local").click(function(){
          $(".event_even").remove();
          $(".event_odd").remove();
          for(var i=0; i<markers.length;i++){
            markers[i].setMap(null);
          };

          // First event
          $("#events_body").append("<tr class=\"event_odd\">").children('tr:last')
          .append("<td class=\"event_title\">Student-Alumni Career Talks: Business</td>")
          .append("<td>Career, Networking, UVA, Alumni</td>")
          .append("<td>Are you an international UvA student or recent graduate and considering starting your career in the business sector? At this Career Talk you will have the opportunity to expand your network and learn how UvA alumni started their business career in the Netherlands. <a href=\"https://student.uva.nl/en/events/content/events/2016/02/career-talks---business-25-february-2016.html\">more...</a></td>")
          .append("<td class=\"event_content\">25. February 2016, 19:15-21:00</td>")
          .append("<td>Amsterdam, The Netherlands</td>")
          .append("<td><a href=\"http://178.62.200.142/ossn/u/Johnfree\">Groffa, J.</a>,</br><a href=\"http://178.62.200.142/ossn/u/Chen\">Chen, Y.</a>,</br><a href=\"http://178.62.200.142/ossn/u/Ashman\">Ashman, H.</a></td>");

          var marker = new google.maps.Marker({
            map: map,
            position: amsterdam,
            title: "Student-Alumni Career Talks: Business",
          });
          markers.push(marker);

          // Student-Alumni Career Talks: Research/PhD
          $("#events_body").append("<tr class=\"event_even\">").children('tr:last')
          .append("<td class=\"event_title\">Student-Alumni Career Talks: Research/PhD</td>")
          .append("<td>PhD, Networking, Research</td>")
          .append("<td>Are you an international UvA student or recent graduate and considering starting your career in the research sector? At this Career Talk you will have the opportunity to expand your network and learn how UvA alumni started their research career in the Netherlands. <a href=\"https://student.uva.nl/en/events/content/events/2016/03/career-talks---research-phd-17-march-2016.html\">more...</a></td>")
          .append("<td class=\"event_content\">17 March 2016 19:15-21:00</td>")
          .append("<td>Amsterdam, The Netherlands</td>")
          .append("<td><a href=\"http://178.62.200.142/ossn/u/Fishy\">Fischetti, M.</a>,</br><a href=\"http://178.62.200.142/ossn/u/Marijn\">Pellowa, M.</a>,</br><a href=\"http://178.62.200.142/ossn/u/Bizer\">Bizer, C.</a>,</br><a href=\"http://178.62.200.142/ossn/u/Gillies\">Gillies, J.</a></td>");          

          var marker = new google.maps.Marker({
            map: map,
            position: amsterdam,
            title: "Student-Alumni Career Talks: Research/PhD",
          });
          markers.push(marker);

        });
      });    



     // Repaint event table for Summer schools
    $ (document).ready(function() {
        $("#categories_summer_schools").click(function(){
          $(".event_even").remove();
          $(".event_odd").remove();
          for(var i=0; i<markers.length;i++){
            markers[i].setMap(null);
          };     

          // Energy Systems Conference 2016: 21st Century Challenges
          $("#events_body").append("<tr class=\"event_odd\">").children('tr:last')
          .append("<td class=\"event_title\">Energy Systems Conference 2016: 21st Century Challenges</td>")
          .append("<td>Nano technologies, High-tech surfaces and materials</td>")
          .append("<td>To meet future global energy needs, in ways that are safe, secure, sustainable and affordable, we need a more integrated, intelligent energy system. <a href=\"http://www.energysystemsconference.com/\">more...</a></td>")
          .append("<td class=\"event_content\">14-15 June 2016</td>")
          .append("<td>London, UK</td>")
          .append("<td><a href=\"http://178.62.200.142/ossn/u/Idehen\">Idehen, K.</a>,<br/><a href=\"http://178.62.200.142/ossn/u/chiltona\">Chiltona, L.</a>,<br/><a href=\"http://178.62.200.142/ossn/u/Archinard\">Archinard, M.</a></td>");


          var marker = new google.maps.Marker({
            map: map,
            position: london,
            title: "Energy Systems Conference 2016: 21st Century Challenges",
          });
          markers.push(marker); 


          // Seventh International Conference on Engineering Failure Analysis
          $("#events_body").append("<tr class=\"event_even\">").children('tr:last')
          .append("<td class=\"event_title\">Seventh International Conference on Engineering Failure Analysis</td>")
          .append("<td>Conference, Engineering, Failure Analysis</td>")
          .append("<td>Engineering failure analysis is a key tool for the improvement of the modern innovation cycle now demands that component design involves a whole-of-life approach, incorporating an awareness of manufacture, safety, reliability, environmental sensitivity and disposal.  <a href=\"http://www.icefaconference.com/\">more...</a></td>")
          .append("<td class=\"event_content\">3-6 July 2016</td>")
          .append("<td>Leipzig, Germany</td>")
          .append("<td><a href=\"http://178.62.200.142/ossn/u/Chen\">Chen, Y.</a>,<br/><a href=\"http://178.62.200.142/ossn/u/Pollerman\">Pollerman, B.Z.</a>,<br/><a href=\"http://178.62.200.142/ossn/u/Marijn\">Pellowa, M.</a>,<br/><a href=\"http://178.62.200.142/ossn/u/Khateb\">Khateb, A.</a>,<br/><a href=\"http://178.62.200.142/ossn/u/Idehen\">Idehen, K.</a>,<br/></td>");


          var marker = new google.maps.Marker({
            map: map,
            position: leipzig,
            title: "Student-Alumni Career Talks: Research/PhD",
          });
          markers.push(marker);


          // EcoSummit 2016 - Ecological Sustainability: Engineering Change
          $("#events_body").append("<tr class=\"event_odd\">").children('tr:last')
          .append("<td class=\"event_title\">EcoSummit 2016<br/>Ecological Sustainability: Engineering Change</td>")
          .append("<td>Ecology, Sustainability, Environment</td>")
          .append("<td>CThis conference series was founded in 1996 in Copenhagen, as a forum to meet the demands of scientists working in several new ecological disciplines, and who required a better understanding of the concepts and methods for a holistic use of ecology in environmental management. <a href=\"http://www.ecosummit2016.org/\">more...</a></td>")
          .append("<td class=\"event_content\">29 August - 1 September 2016</td>")
          .append("<td>Le Corum, Montpellier, France</td>")
          .append("<td><a href=\"http://178.62.200.142/ossn/u/Idehen\">Idehen, K.</a>,<br/><a href=\"http://178.62.200.142/ossn/u/Fishy\">Fischetti, M.</a></td>");

          var marker = new google.maps.Marker({
            map: map,
            position: le_corum,
            title: "EcoSummit 2016 - Ecological Sustainability: Engineering Change",
          });
          markers.push(marker);




         });
      });  





