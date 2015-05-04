
package com.soldoutazondb.data.output;

import java.util.Date;


/**
 * Generated for query "getProducts" on 06/02/2012 00:43:22
 * 
 */
public class GetProductsRtnType {

    private Integer id;
    private String name;
    private String asin;
    private Integer rank;
    private String category;
    private Date lastupdate;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAsin() {
        return asin;
    }

    public void setAsin(String asin) {
        this.asin = asin;
    }

    public Integer getRank() {
        return rank;
    }

    public void setRank(Integer rank) {
        this.rank = rank;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public Date getLastupdate() {
        return lastupdate;
    }

    public void setLastupdate(Date lastupdate) {
        this.lastupdate = lastupdate;
    }

}
