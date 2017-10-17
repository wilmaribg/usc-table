if(typeof TEMPLATE === 'undefined') {var TEMPLATE = {};}
TEMPLATE[''] = "<div id=\"usc-table\">\n" +
    "\n" +
    "	<table>\n" +
    "		<thead>\n" +
    "			<tr>\n" +
    "				<td>uno</td>\n" +
    "				<td>dos</td>\n" +
    "			</tr>\n" +
    "		</thead>\n" +
    "		<tbody>\n" +
    "			<tr v-for=\"(item, index) in dataSource\">\n" +
    "				<td>\n" +
    "					<span @click=\"item.event(this)\" v-if=\"item.type === 'text'\">\n" +
    "						{{ item.value }}\n" +
    "					</span>\n" +
    "				</td>\n" +
    "				<td>1</td>\n" +
    "			</tr>\n" +
    "		</tbody>\n" +
    "	</table>\n" +
    "\n" +
    "</div>"; 