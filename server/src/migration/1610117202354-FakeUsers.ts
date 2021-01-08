import { MigrationInterface, QueryRunner } from 'typeorm';

export class FakeUsers1610117202354 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Becka', 'Lathaye', 'blathaye0@answers.com', 'S3b0DtrTxpu', 'customer');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Griz', 'Pinnell', 'gpinnell1@unc.edu', 'kUad1c', 'customer');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Packston', 'Hackworthy', 'phackworthy2@about.me', 'mi949U6sq6F', 'customer');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Rebeca', 'Vlasenkov', 'rvlasenkov3@washingtonpost.com', '1gL4q8ED', 'customer');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Jo-anne', 'Hadingham', 'jhadingham4@linkedin.com', 'YaIgjhOQS', 'customer');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Issiah', 'Joanaud', 'ijoanaud5@bloomberg.com', 'bsQvQMZMq', 'customer');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Annette', 'Franzke', 'afranzke6@earthlink.net', 'J98CVd9IQn', 'customer');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Ellen', 'Davidsson', 'edavidsson7@goo.gl', 'rqVyy4EM', 'customer');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Colene', 'Kield', 'ckield8@ycombinator.com', 'b0Wh8v4F1qb', 'customer');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Pascale', 'Bosdet', 'pbosdet9@mail.ru', 'HqjEi6MRe', 'customer');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Valencia', 'Churching', 'vchurchinga@infoseek.co.jp', 'zy96GeZf9Tkp', 'customer');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Aurelea', 'Swanborough', 'aswanboroughb@woothemes.com', 'e4ua97136D4', 'customer');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Joela', 'Spadoni', 'jspadonic@booking.com', 'P6R9npM1kq7Y', 'customer');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Grantley', 'Ricket', 'gricketd@photobucket.com', 'i28lsXiyQoBq', 'customer');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Lotte', 'Gummer', 'lgummere@exblog.jp', '6oui0Izu8Nl', 'customer');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Louella', 'Bredbury', 'lbredburyf@cnn.com', 'fhzCcJqeO', 'customer');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Aubrey', 'Le Provost', 'aleprovostg@cyberchimps.com', 'Cb7eyJXT', 'customer');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Rochella', 'Sancto', 'rsanctoh@tmall.com', 'u3MYQ2G2Q', 'customer');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Salomi', 'Gooday', 'sgoodayi@usnews.com', '4rNuBa9', 'customer');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Ike', 'Pieterick', 'ipieterickj@phoca.cz', '76yPm3QdTvVJ', 'customer');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Hans', 'Demogeot', 'hdemogeotk@tripadvisor.com', 'uwvOqVKrrsoG', 'customer');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Ned', 'Corthes', 'ncorthesl@clickbank.net', 'hSFfd35b1m', 'customer');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Delly', 'Pinnick', 'dpinnickm@loc.gov', '0yJBTcA', 'customer');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Blithe', 'Schlagh', 'bschlaghn@parallels.com', 'aRn2fB', 'customer');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Eb', 'Ivankov', 'eivankovo@yelp.com', 'P57lwR', 'customer');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Ulrika', 'Francklin', 'ufrancklinp@bluehost.com', 'qqUFfaSFX6', 'customer');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Aylmer', 'Gapper', 'agapperq@theatlantic.com', 'E3todnj', 'customer');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Ulberto', 'Blencowe', 'ublencower@infoseek.co.jp', 'oumyOUhJ1RL', 'customer');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Morrie', 'Tolussi', 'mtolussis@themeforest.net', 'oETFPMRT0A', 'customer');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Ryun', 'MacGovern', 'rmacgovernt@theguardian.com', 'YvZwLB', 'customer');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Brear', 'Howgill', 'bhowgillu@g.co', 'u4W7nd', 'customer');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Mathew', 'Mockler', 'mmocklerv@yahoo.com', 'AHHFvys', 'customer');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Pamela', 'Farmery', 'pfarmeryw@sfgate.com', 'xtBdJm7P', 'customer');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Bertrand', 'Talmadge', 'btalmadgex@usa.gov', 'HTOYwqw0MpF', 'customer');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Jarid', 'Maskill', 'jmaskilly@bbc.co.uk', '6NG2vs5J', 'customer');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Henderson', 'Kobelt', 'hkobeltz@cpanel.net', 'zYnf1Zy0gcN6', 'customer');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Clevie', 'Wand', 'cwand10@scientificamerican.com', 'uHohcPeNr', 'customer');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Eben', 'Bristoe', 'ebristoe11@ucoz.com', 'ON95gSu', 'customer');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Darcy', 'Musso', 'dmusso12@vimeo.com', 'pUwjzGbw4', 'customer');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Bren', 'Sugg', 'bsugg13@nbcnews.com', 'cEnbpG', 'customer');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Goran', 'Veevers', 'gveevers14@blinklist.com', 'i8ByYGOpsvx', 'customer');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Dominique', 'Flanaghan', 'dflanaghan15@hubpages.com', 'APr90p5', 'customer');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Harley', 'Delgua', 'hdelgua16@xrea.com', 'fGZMVf', 'customer');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Loralie', 'Trunks', 'ltrunks17@intel.com', 'zHdtzG', 'customer');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Shandra', 'Woollin', 'swoollin18@cnn.com', 'wNoCFPfc7bK', 'customer');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Fedora', 'Dorrington', 'fdorrington19@newyorker.com', 'EGec8hn3Dk', 'customer');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Galina', 'Garm', 'ggarm1a@indiegogo.com', 'qBRY18oR4', 'customer');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Arlie', 'Shelsher', 'ashelsher1b@nih.gov', 'SU9nBtvNmW', 'customer');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Elayne', 'Lenaghen', 'elenaghen1c@i2i.jp', 'RCfUbvbQm5ZB', 'customer');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Marty', 'Weadick', 'mweadick1d@google.com', 'iVdp8Yt', 'customer');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Guillaume', 'Morcomb', 'gmorcomb1e@discovery.com', 'KzgsCCkiyt', 'customer');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Emmaline', 'Ranahan', 'eranahan1f@disqus.com', 'qV5sswC', 'customer');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Roi', 'Joel', 'rjoel1g@dot.gov', 'e0Dzbfm3ZU', 'customer');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Nahum', 'Magrane', 'nmagrane1h@mapy.cz', 'hMnPJ6jt3s', 'customer');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Sal', 'Muckley', 'smuckley1i@bloglovin.com', 'y903FNh', 'customer');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Kristan', 'Ducker', 'kducker1j@ovh.net', 'jblf9bB', 'customer');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Rikki', 'Sallenger', 'rsallenger1k@boston.com', 'HpGQVQFN', 'customer');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Randene', 'Prendeguest', 'rprendeguest1l@timesonline.co.uk', 'OoTDmtJDzw', 'customer');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Matthias', 'Pitt', 'mpitt1m@fema.gov', 'KuhJZf', 'customer');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Velma', 'Gillyett', 'vgillyett1n@java.com', 'GgmZz7', 'customer');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Florie', 'Polon', 'fpolon1o@flavors.me', 'r0iKVFJzItD7', 'customer');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Niko', 'Raynham', 'nraynham1p@mysql.com', '6aZ7r6ge', 'customer');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Gunther', 'Elias', 'gelias1q@phpbb.com', 'sX5smwX', 'customer');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Gage', 'Cregg', 'gcregg1r@google.com', 'OZKiGtE', 'customer');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Korella', 'Egar', 'kegar1s@bizjournals.com', 'ogZRMSNXzxd', 'customer');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Anallese', 'Callis', 'acallis1t@hao123.com', 'IQD13P1K5U', 'customer');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Britt', 'Poynor', 'bpoynor1u@surveymonkey.com', 'BXTytq', 'customer');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Roxie', 'Dightham', 'rdightham1v@macromedia.com', '7zbrnlg', 'customer');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Seumas', 'Heeney', 'sheeney1w@naver.com', 'K9nA8NMcPKa', 'customer');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Fabiano', 'Kynge', 'fkynge1x@mediafire.com', 'vTGBeS', 'customer');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Megen', 'Hamfleet', 'mhamfleet1y@adobe.com', 'J0xQ6n', 'customer');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Dianne', 'Dyble', 'ddyble1z@statcounter.com', 'RdZssGT', 'customer');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Archy', 'Gheerhaert', 'agheerhaert20@fastcompany.com', 'G9AZzQvT2lb', 'customer');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Nickie', 'Doberer', 'ndoberer21@wikipedia.org', 'cbAgf2l0', 'customer');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Chadd', 'Leteurtre', 'cleteurtre22@umn.edu', 'aZEoJ3QAG', 'customer');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Gal', 'Betty', 'gbetty23@china.com.cn', '1E8aiOhk', 'customer');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Clevey', 'McLagain', 'cmclagain24@cyberchimps.com', 'WPQ98VW', 'customer');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Therese', 'Morfell', 'tmorfell25@who.int', '0AdLe5Cnw', 'customer');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Lewes', 'Mockford', 'lmockford26@google.cn', 'kqJ7sT', 'customer');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Jackelyn', 'Savage', 'jsavage27@army.mil', 'iLkFAscuxNm', 'customer');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Paulo', 'MacGillacolm', 'pmacgillacolm28@networksolutions.com', 'WM66SeWQ2Jr', 'customer');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Ogden', 'Matevushev', 'omatevushev29@soup.io', 'wm44a4w', 'customer');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Parnell', 'Borrett', 'pborrett2a@home.pl', 'lEpzgnmyp1', 'customer');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Deb', 'Capinetti', 'dcapinetti2b@accuweather.com', 'cepuTEg', 'customer');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Karalynn', 'Pheazey', 'kpheazey2c@smh.com.au', 'zNtMvKuZ', 'customer');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Giffie', 'Abramsky', 'gabramsky2d@comsenz.com', '4PLVlhbSD', 'customer');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Torr', 'Alton', 'talton2e@plala.or.jp', 'e0qfZb7JUd', 'customer');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Nell', 'Theyer', 'ntheyer2f@nhs.uk', 'ywETWYS', 'customer');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Brod', 'Domenichini', 'bdomenichini2g@wordpress.com', 'oU52UK5', 'customer');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Alvina', 'McCheyne', 'amccheyne2h@naver.com', 'ijAqa9Sg', 'customer');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Berthe', 'MacCallam', 'bmaccallam2i@unc.edu', 'DHuuRs0XY', 'customer');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Amye', 'Greeson', 'agreeson2j@nymag.com', '4cOr5CkhMuuy', 'customer');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Arlana', 'Carryer', 'acarryer2k@wikimedia.org', 'gUfDqKxdGXk', 'customer');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Miguela', 'Druitt', 'mdruitt2l@senate.gov', 'TmpJwpg4taEe', 'customer');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Hillery', 'Short', 'hshort2m@joomla.org', 'iDS5g5R15', 'customer');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Fanchette', 'Komorowski', 'fkomorowski2n@blog.com', 'utQ35X9VBq8', 'customer');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Erastus', 'Cullerne', 'ecullerne2o@answers.com', 'FD3RLcIb', 'customer');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Natassia', 'Deware', 'ndeware2p@admin.ch', 'q4hTlFewg', 'customer');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Odessa', 'Ragsdall', 'oragsdall2q@unicef.org', '9ghFKqpApX', 'customer');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Debbie', 'Sloane', 'dsloane2r@bravesites.com', 'FcOMkn', 'customer');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Timoteo', 'Tulip', 'ttulip0@i2i.jp', 'D5SHuzXwkuKO', 'owner');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Vinni', 'Halvosen', 'vhalvosen1@newyorker.com', 'uE8plDAohO', 'owner');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Lynn', 'Band', 'lband2@ucoz.com', 'Ik4gREmhQQ', 'owner');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Zonnya', 'Ivens', 'zivens3@angelfire.com', 'H7bYkaYSi', 'owner');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Theresa', 'Hambridge', 'thambridge4@123-reg.co.uk', 'NYy8BPq', 'owner');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Holt', 'Pickthorne', 'hpickthorne5@ehow.com', 'v9iiuNEJ', 'owner');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Minette', 'Benduhn', 'mbenduhn6@ask.com', 'G6ezVFxcA4o', 'owner');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Lew', 'Claus', 'lclaus7@intel.com', 'E5eqcilPXBhK', 'owner');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('De witt', 'Castanares', 'dcastanares8@livejournal.com', '2JrBLewvdv', 'owner');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Yancey', 'Tomlin', 'ytomlin9@ning.com', 'mSZl34UV', 'owner');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Breanne', 'Kearle', 'bkearlea@alexa.com', 'JNbm7VNvwB', 'owner');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Eward', 'Cleare', 'ecleareb@techcrunch.com', 'gGUPTg90RIIJ', 'owner');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Arman', 'Elcott', 'aelcottc@cbc.ca', 'bXS6070M', 'owner');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Edvard', 'Turvie', 'eturvied@foxnews.com', 'HiyLMmW2COYj', 'owner');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Arlette', 'Kenefick', 'akeneficke@slate.com', 'VCIvoc', 'owner');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Pandora', 'Dunderdale', 'pdunderdalef@nba.com', 'aAbQTM7A', 'owner');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Bertha', 'Caslett', 'bcaslettg@arizona.edu', 'JwQFFXsl', 'owner');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Noak', 'Andre', 'nandreh@blogspot.com', 'wt7Kbk', 'owner');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Payton', 'Fortune', 'pfortunei@edublogs.org', 'rRQpzNBjdI0', 'owner');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Jemmie', 'Creber', 'jcreberj@netvibes.com', 'v00JxilZ2SfB', 'owner');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Griff', 'Dignan', 'gdignank@si.edu', 'aH5HdfQgy9f', 'owner');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Elsinore', 'Royle', 'eroylel@hao123.com', '8tMXM97Y5vH', 'owner');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Adriane', 'Borges', 'aborgesm@mozilla.com', 'iRmEUfPVLz', 'owner');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Jordan', 'Mayho', 'jmayhon@yahoo.co.jp', 'KBL4Uuozqq', 'owner');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Denys', 'Engley', 'dengleyo@vimeo.com', 'CfdQMc3EZ', 'owner');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Maegan', 'Knobell', 'mknobellp@sina.com.cn', 'CeDKe1pIMPx', 'owner');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Abby', 'Salle', 'asalleq@china.com.cn', 'Q4PtLcxW71hm', 'owner');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Ardis', 'Mityushin', 'amityushinr@forbes.com', 'mTKCY5', 'owner');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Dallon', 'Kittles', 'dkittless@networkadvertising.org', 'gLiqfetNUp', 'owner');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Conrado', 'Skelington', 'cskelingtont@google.com.hk', 'oQzRvSDbPQd', 'owner');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Tait', 'Thurstance', 'tthurstanceu@youku.com', 'W4e3iuJNG', 'owner');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Letty', 'Westmancoat', 'lwestmancoatv@skyrock.com', 'StxRDp', 'owner');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Edyth', 'Hardison', 'ehardisonw@odnoklassniki.ru', 'kfqKOOYwk2Jg', 'owner');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Mauricio', 'O''Fallon', 'mofallonx@mit.edu', 'RaPXL4FK', 'owner');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Gerrie', 'Huyhton', 'ghuyhtony@google.co.uk', 'G1owaPny10', 'owner');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Katerine', 'Pedracci', 'kpedracciz@vistaprint.com', '5ju1xI', 'owner');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Callida', 'Hintzer', 'chintzer10@wsj.com', 'TSIMdAum', 'owner');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Reilly', 'Tummasutti', 'rtummasutti11@histats.com', 'jjN2nekhHp', 'owner');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Ethelbert', 'Growcock', 'egrowcock12@surveymonkey.com', 'qGkj9PDM8', 'owner');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Leilah', 'Cawdell', 'lcawdell13@wikispaces.com', 'xXWuNOQeBzXP', 'owner');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Catherina', 'Spurrett', 'cspurrett14@list-manage.com', 'QaUC9ssFs', 'owner');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Doretta', 'Sandon', 'dsandon15@ehow.com', 'ilLc4UP', 'owner');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Germana', 'McHale', 'gmchale16@so-net.ne.jp', 'NYfv1NC', 'owner');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Carlie', 'Marking', 'cmarking17@amazon.co.uk', '6CkKF8O', 'owner');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Pattie', 'Stairmand', 'pstairmand18@sciencedirect.com', 'PQhkzi', 'owner');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Olly', 'Perillo', 'operillo19@theglobeandmail.com', '9cUkA2wCzk', 'owner');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Bryana', 'Malcolmson', 'bmalcolmson1a@independent.co.uk', 'hw06WIEJXM', 'owner');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Kyla', 'Breache', 'kbreache1b@reference.com', '5u4ofa2EftF', 'owner');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Jerrie', 'Esplin', 'jesplin1c@ucla.edu', 'Us5nwS', 'owner');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Daffy', 'Beresford', 'dberesford1d@alexa.com', '3g5HhH9', 'owner');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Gretel', 'Chapling', 'gchapling1e@bing.com', 'SW7ujMlX', 'owner');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Alfred', 'Mumm', 'amumm1f@mit.edu', 'aTo0Fo', 'owner');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Clementius', 'Tickner', 'ctickner1g@timesonline.co.uk', '4h6eWl19ro', 'owner');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Sarena', 'Ivankovic', 'sivankovic1h@telegraph.co.uk', 'ufnR7B', 'owner');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Byrom', 'Boundey', 'bboundey1i@cocolog-nifty.com', 'Y4WrESOy', 'owner');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Evy', 'Rama', 'erama1j@free.fr', 'yqtslAT', 'owner');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Fabian', 'Chowne', 'fchowne1k@bing.com', 'KysiOo', 'owner');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Reggis', 'Mellmer', 'rmellmer1l@ebay.co.uk', 'YIcwkSuk', 'owner');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Alaine', 'Ruffles', 'aruffles1m@sakura.ne.jp', 'NJ5M9A7xR0', 'owner');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Merline', 'Culbard', 'mculbard1n@utexas.edu', 'd69exuBJJ5', 'owner');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Theodore', 'Getty', 'tgetty1o@squarespace.com', 'TFSK4FE9rqev', 'owner');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Elie', 'Faithorn', 'efaithorn1p@alibaba.com', 'g6WnEImOzZrz', 'owner');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Vanya', 'Tigner', 'vtigner1q@slate.com', '9icdN2r9', 'owner');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Laurie', 'Heaseman', 'lheaseman1r@odnoklassniki.ru', 'yL1mONNfGUh', 'owner');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Lovell', 'Youens', 'lyouens1s@flickr.com', 'psPWYV5mN', 'owner');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Eustace', 'Bexon', 'ebexon1t@shinystat.com', 'z30KrfMRH', 'owner');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Hedda', 'Ponter', 'hponter1u@squarespace.com', 'yYA3BaCCnBC5', 'owner');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Clarabelle', 'Woodberry', 'cwoodberry1v@cdc.gov', 'hewO8dXNYtu', 'owner');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Chastity', 'Rushe', 'crushe1w@flickr.com', 'HjcwOiyvLo', 'owner');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Maxy', 'Fairham', 'mfairham1x@printfriendly.com', 'lqwDFRPdtX', 'owner');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Charmian', 'Foran', 'cforan1y@omniture.com', '1jjOeq', 'owner');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Reginauld', 'Eshmade', 'reshmade1z@comsenz.com', 'OYk5Km5y', 'owner');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Sullivan', 'Cheek', 'scheek20@amazon.com', 'jWGMwE', 'owner');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Suzi', 'Scurrah', 'sscurrah21@pbs.org', '0OTZNO', 'owner');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Claiborn', 'Faier', 'cfaier22@about.me', 'iTCWQgUOwH', 'owner');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Melisse', 'Corragan', 'mcorragan23@jugem.jp', 'Qfquup', 'owner');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Timoteo', 'Jeanneau', 'tjeanneau24@archive.org', 'CeLxeX6U', 'owner');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Lynde', 'Loxton', 'lloxton25@fema.gov', 'qH4IYPyU', 'owner');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Killian', 'Benion', 'kbenion26@apple.com', 'X7EbQaQyeWi', 'owner');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Kass', 'Brennen', 'kbrennen27@naver.com', 'yJDef9bJQA', 'owner');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Annamarie', 'Macklin', 'amacklin28@blog.com', 'WDvi0O6', 'owner');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Lynnette', 'Sollitt', 'lsollitt29@netscape.com', 'L6xWX0u', 'owner');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Corney', 'Meneghelli', 'cmeneghelli2a@yahoo.co.jp', 'hXESDtaPE', 'owner');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Lurlene', 'Pelling', 'lpelling2b@google.co.uk', 'SqH4QzvvScpc', 'owner');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Eadie', 'Bottomley', 'ebottomley2c@multiply.com', 'LS3WNi', 'owner');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Christalle', 'Paske', 'cpaske2d@chicagotribune.com', 'i1ezyqz', 'owner');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Hanni', 'Jovis', 'hjovis2e@noaa.gov', 'eHOhmmd', 'owner');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Tybi', 'Lamps', 'tlamps2f@businessweek.com', '40TP7wm7', 'owner');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Lilla', 'Waggatt', 'lwaggatt2g@narod.ru', 'IKGfe0S0oU', 'owner');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Jami', 'Bramelt', 'jbramelt2h@ycombinator.com', '39NEum', 'owner');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Bev', 'Hesser', 'bhesser2i@wunderground.com', '1SC1L1iHfp7', 'owner');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Fannie', 'Toffoletto', 'ftoffoletto2j@pinterest.com', '23lKfoo2', 'owner');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Nanci', 'Dwane', 'ndwane2k@163.com', 'ua8TB4JB', 'owner');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Junie', 'Stranio', 'jstranio2l@tinyurl.com', 'RdwrEo5dJLL', 'owner');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Venus', 'Surtees', 'vsurtees2m@e-recht24.de', 'b8cQM7RgH8t', 'owner');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Skipp', 'Kornas', 'skornas2n@ca.gov', 'YPyuoU', 'owner');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Seymour', 'Wulfinger', 'swulfinger2o@imgur.com', 'byTTzOF', 'owner');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Marita', 'Duncanson', 'mduncanson2p@blinklist.com', 'obpoD3D2CoO', 'owner');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Elfie', 'Keilty', 'ekeilty2q@bluehost.com', '42gLW2vgNoJt', 'owner');
        INSERT INTO "User" ("firstName", "lastName", "email", "password", "role") VALUES ('Tessi', 'Phelips', 'tphelips2r@cpanel.net', 'Osmlm9Nzdz6y', 'owner');
        `);
    }

    public async down(_: QueryRunner): Promise<void> {}
}